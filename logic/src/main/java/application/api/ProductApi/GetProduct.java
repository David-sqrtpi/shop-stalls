package application.api.ProductApi;

import application.Repository.ProductRepository;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class GetProduct {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("products/{product}")
    public Product get(@PathVariable String product,
                       @RequestParam long company) {
        return productRepository.findByCompanyIdAndBarcode(company, product);
    }
}