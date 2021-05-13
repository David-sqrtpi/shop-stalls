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

    public void addPurchaseDetail(PurchaseDetail purchaseDetail) {

    }

    public void addAllPurchaseDetail(List<PurchaseDetail> purchaseDetailList) {
        List<Inventory> inventoryProducts = new ArrayList<>();

        for (PurchaseDetail purchaseDetail : purchaseDetailList) {
            Inventory inventory = new Inventory();
            Product product = productRepository.findByCompanyIdAndBarcode(purchaseDetail.getProduct().getCompany().getId(),
                    purchaseDetail.getProduct().getBarcode());
            purchaseDetail.setProduct(product);
            if (inventoryRepository.existsByProductId(product.getId())) {
                inventory = inventoryRepository.findByProductId(product.getId());
            } else {
                inventory.setProduct(purchaseDetail.getProduct());
            }

            long price = purchaseDetail.getPrice() / purchaseDetail.getQuantity();
            inventory.setQuantity(purchaseDetail.getQuantity() + inventory.getQuantity());
            if (inventory.getPurchasePrice() == 0) {
                inventory.setPurchasePrice(price);
            } else {
                long purchasePrice = inventory.getPurchasePrice();
                inventory.setPurchasePrice((price + purchasePrice) / 2);
            }
            inventoryProducts.add(inventory);
        }
        inventoryRepository.saveAll(inventoryProducts);
        purchaseDetailRepository.saveAll(purchaseDetailList);
    }
}
