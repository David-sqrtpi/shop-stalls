package application.services;

import application.Repository.InventoryRepository;
import application.entity.Inventory;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public void addToinventory(List<PurchaseDetail> purchaseProducts) {
        List<Inventory> inventoryProducts = new ArrayList<>();

        for(PurchaseDetail purchaseDetail: purchaseProducts){
            Inventory inventoryProduct = new Inventory();
            inventoryProduct.setProduct(purchaseDetail.getProduct());
            inventoryProduct.setQuantity(purchaseDetail.getQuantity());
            long price = purchaseDetail.getPrice() / purchaseDetail.getQuantity();
            inventoryProduct.setPurchasePrice(price);
            inventoryProducts.add(inventoryProduct);
        }
        inventoryRepository.saveAll(inventoryProducts);
    }
}
