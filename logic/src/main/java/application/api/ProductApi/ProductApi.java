package application.api.ProductApi;

import application.models.Product;
import application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("product")
@CrossOrigin
public class ProductApi {
    @Autowired
    ProductRepository productRepository ;

    @PostMapping ("add")
    public Product add(@RequestBody Product product){
        System.out.println(product.getId());
        productRepository.save(product) ;
        return  product ;

    }
}
