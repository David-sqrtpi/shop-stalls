package application.api.ProductApi;

import application.DTO.ProductDTO;
import application.Repository.ProductRepository;
import application.services.ProductConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class GetProduct {
    @Autowired
    private ProductRepository repositoryProductService;

    @Autowired
    private ProductConverter productConverter;

    @GetMapping("/{id}")
    public ProductDTO get(@PathVariable long id) {
        return productConverter.fromEntity(repositoryProductService.findById(id));
    }
}




