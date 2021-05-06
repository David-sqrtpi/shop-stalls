package application.api.ProductApi;

import application.DTO.ProductDTO;
import application.Repository.ProductRepository;
import application.models.Product;
import application.util.ProductConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class GetProduct {
    @Autowired
    private ProductRepository repositoryProductService;

    @Autowired
    private ProductConverter productConverter;

    @GetMapping("products/{product}")
    public Product get(@PathVariable long product) {
        return repositoryProductService.findById(product);
    }
}




