package application.services;

import application.Repository.InventoryRepository;
import application.Repository.ProductRepository;
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
    @Autowired
    private ProductRepository productRepository;

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
