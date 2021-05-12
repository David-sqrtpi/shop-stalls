package application.api.ProductApi;

import application.Repository.InventoryRepository;
import application.entity.Inventory;
import application.entity.Product;
import application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("products")
@CrossOrigin
public class AddProduct {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    InventoryRepository inventoryRepository;

    @PostMapping
    public void add(@RequestBody Product product){
        Inventory inventory = new Inventory();
        inventory.setProduct(product);
        productRepository.save(product);
        inventoryRepository.save(inventory);
    }
}
