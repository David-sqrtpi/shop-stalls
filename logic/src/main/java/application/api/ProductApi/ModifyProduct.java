package application.api.ProductApi;

import application.Repository.ProductRepository;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("products")
@CrossOrigin
public class ModifyProduct {
    @Autowired
    ProductRepository productRepository ;

    @PutMapping
    public void modify(@RequestBody Product product){
        productRepository.save(product);
    }
}
