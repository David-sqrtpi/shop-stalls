package application.api.ProductApi;

import application.models.Product;
import application.services.RepositoryProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("product/add")
@CrossOrigin("*")
public class AddProduct {

    @Autowired
    private RepositoryProductService RepositoryProductService;

    @PostMapping()
    public String add (@RequestBody Product product){

        RepositoryProductService.save(product);

        return "Saved";

    }
}
