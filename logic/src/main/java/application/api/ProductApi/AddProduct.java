package application.api.ProductApi;

import application.Repository.InventoryRepository;
import application.entity.Inventory;
import application.entity.Product;
import application.Repository.ProductRepository;
import application.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("products")
@CrossOrigin
public class AddProduct {
    @Autowired
    private ProductService productService;

    @PostMapping
    public void add(@RequestBody Product product){
        productService.save(product);
    }
}
