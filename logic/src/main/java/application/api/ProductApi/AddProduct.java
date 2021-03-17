package application.api;


import application.models.Product;
import application.models.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping ("product")
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
