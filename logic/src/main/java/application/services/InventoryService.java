package application.services;

import application.Repository.InventoryProductRepository;
import application.entity.InventoryProduct;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryProductRepository inventoryProductRepository;

    public void addToinventory(List<PurchaseDetail> purchaseProduts) {

        List<InventoryProduct> inventoryProducts = new ArrayList<>();

        for(PurchaseDetail purchaseDetail: purchaseProduts){
            InventoryProduct inventoryProduct = new InventoryProduct();
            inventoryProduct.setProduct(purchaseDetail.getProduct());
            inventoryProduct.setQuantity(purchaseDetail.getQuantity());
            long price = purchaseDetail.getSubtotal() / purchaseDetail.getQuantity();
            inventoryProduct.setCostSale(price);
            inventoryProducts.add(inventoryProduct);
        }
        inventoryProductRepository.saveAll(inventoryProducts);
    }
}
