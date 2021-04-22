package application.api.ProductApi;

import application.models.Product;
import application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("products")
@CrossOrigin
public class ModifyProduct {
    @Autowired
    ProductRepository productRepository ;

    @PutMapping("/{id}")
    public Product add(@RequestBody Product product, @PathVariable int id){
        System.out.println(product.getId());
        productRepository.save(product) ;
        return  product ;

    }
}
