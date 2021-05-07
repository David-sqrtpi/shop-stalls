package application.api.CompanyApi;

import application.Repository.ProductRepository;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{id}/products")
public class GetProductsFromCompany {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts(@PathVariable long id) {
        return productRepository.findByCompanyId(id);
    }
}
