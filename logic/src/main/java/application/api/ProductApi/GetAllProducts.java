package application.api.ProductApi;

import application.Repository.ProductRepository;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
@CrossOrigin
public class GetAllProducts {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping()
    public List<Product> getAll(@RequestParam long company) {
        return productRepository.findByCompanyId(company);
    }

}
