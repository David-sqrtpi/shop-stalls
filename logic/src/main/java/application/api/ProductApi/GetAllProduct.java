package application.api.ProductApi;

import application.DTO.ProductDTO;
import application.Repository.ProductRepository;
import application.services.ProductConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
@CrossOrigin
public class GetAllProduct {
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<ProductDTO> getAll() {
        System.out.println("all");
        return productConverter.toProductDTOS(ProductRepository.findAll());
    }

}
