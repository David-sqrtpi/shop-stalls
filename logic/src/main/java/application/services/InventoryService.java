package application.services;

import application.Repository.InventoryRepository;
import application.entity.Inventory;
import application.entity.InvoiceDetail;
import application.entity.Product;
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

        for (PurchaseDetail purchaseDetail : purchaseProducts) {
            if (inventoryRepository.existsByProductId(purchaseDetail.getId())){

            }
            Inventory inventoryProduct = new Inventory();

            long price = purchaseDetail.getPrice() / purchaseDetail.getQuantity();
            inventoryProduct.setProduct(purchaseDetail.getProduct());
            inventoryProduct.setQuantity(purchaseDetail.getQuantity() + inventoryProduct.getQuantity());
            if (inventoryProduct.getPurchasePrice() == 0) {
                inventoryProduct.setPurchasePrice(price);
            } else {
                long purchasePrice = inventoryProduct.getPurchasePrice();
                inventoryProduct.setPurchasePrice((price + purchasePrice) / 2);
            }
            inventoryProducts.add(inventoryProduct);
        }
        inventoryRepository.saveAll(inventoryProducts);
    }

    public void removeFromInventory(List<InvoiceDetail> invoiceProducts){
        List<Inventory> inventoryProducts = new ArrayList<>();

        for (InvoiceDetail invoiceDetail : invoiceProducts) {
            Inventory inventoryProduct = new Inventory();

            long price = invoiceDetail.getPrice() / invoiceDetail.getQuantity();
            inventoryProduct.setProduct(invoiceDetail.getProduct());
            inventoryProduct.setQuantity(inventoryProduct.getQuantity() - invoiceDetail.getQuantity());
            inventoryProducts.add(inventoryProduct);
        }
        inventoryRepository.saveAll(inventoryProducts);
    }

    public void addProduct(Product product) {
        Inventory inventory = new Inventory();
        inventory.setProduct(product);
        inventoryRepository.save(inventory);
    }
}
