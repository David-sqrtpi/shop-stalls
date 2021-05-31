package application.services;

import application.Repository.InventoryRepository;
import application.Repository.ProductRepository;
import application.Repository.PurchaseDetailRepository;
import application.entity.Inventory;
import application.entity.Product;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PurchaseDetailService {
    @Autowired
    private InventoryRepository inventoryRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;

    public void addPurchaseDetails(List<PurchaseDetail> purchaseDetailList) {
        long purchaseTotal = 0;
        for (PurchaseDetail purchaseDetail : purchaseDetailList) {
            Product product = productRepository.findById(purchaseDetail.getProduct().getId());
            Inventory inventory = inventoryRepository.findByProductId(product.getId());

            long price = purchaseDetail.getPrice();
            inventory.setQuantity(purchaseDetail.getQuantity() + inventory.getQuantity());
            if (inventory.getPurchasePrice() == 0) {
                inventory.setPurchasePrice(price);
            } else {
                long purchasePrice = inventory.getPurchasePrice();
                inventory.setPurchasePrice((price + purchasePrice) / 2);
            }
            purchaseTotal += purchaseDetail.getPrice() * purchaseDetail.getQuantity();
            inventoryRepository.save(inventory);
        }
        purchaseDetailList.get(0).getPurchase().setAmountToPay(purchaseTotal);
        purchaseDetailRepository.saveAll(purchaseDetailList);
    }
}
