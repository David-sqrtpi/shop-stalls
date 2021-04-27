package application.api.ServicesApi;

import application.DTO.ProductDTO;
import application.Repository.ProductRepository;
import application.services.ProductConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class GetService {
    @Autowired
    private ProductRepository repositoryServiceService;

    @Autowired
    private ProductConverter serviceConverter;

    @GetMapping("/{id}")
    public ProductDTO get(@PathVariable long id) {
        return serviceConverter.fromEntity(repositoryServiceService.findById(id));
    }
}
