package application.api.ProductApi;

import application.models.Product;
import application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("products")
@CrossOrigin
public class AddProduct {
    @Autowired
    ProductRepository productRepository ;

    @PostMapping
    public void add(@RequestBody Product product){
        productRepository.save(product) ;
    }
}
