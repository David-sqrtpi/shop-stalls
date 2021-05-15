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

    public void decreaseInventory(InvoiceDetail invoiceDetail) {
        Inventory inventory = inventoryRepository.findByProductId(invoiceDetail.getProduct().getId());
        inventory.setQuantity(inventory.getQuantity() - invoiceDetail.getQuantity());
        inventoryRepository.save(inventory);
    }

    public void addProduct(Product product) {
        Inventory inventory = new Inventory();
        inventory.setProduct(product);
        inventoryRepository.save(inventory);
    }
}
