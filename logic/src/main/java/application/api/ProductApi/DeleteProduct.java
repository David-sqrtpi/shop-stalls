package application.api.ProductApi;

import application.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DeleteProduct {

    @Autowired
    private ProductRepository productRepository;

    @DeleteMapping("products/{product}")
    public void delete(@PathVariable long product) {
        productRepository.deleteById(product);
    }
}
