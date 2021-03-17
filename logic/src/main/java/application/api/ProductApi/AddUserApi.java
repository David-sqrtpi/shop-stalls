package application.api.ProductApi;


import application.models.Product;
import application.services.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("product")
public class AddUserApi {

    @Autowired
    ProductRepository productRepository;

    @PostMapping ("add")
    public Product add(@RequestBody Product product){

        productRepository.save(product);
        return  product;

    }
}
