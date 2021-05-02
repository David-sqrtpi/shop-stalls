package application.api.ProductApi;

import application.DTO.ProductDTO;
import application.Repository.ProductRepository;
import application.util.ProductConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
@CrossOrigin
public class GetAllProducts {
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<ProductDTO> getAll() {
        return productConverter.fromEntity(productRepository.findAll());
    }

}
