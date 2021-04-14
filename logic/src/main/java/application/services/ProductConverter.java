package application.services;
import application.DTO.ProductDTO;
import application.DTO.UserDTO;
import application.Repository.CompanyRepository;
import application.Repository.ProductRepository;
import application.Repository.RoleRepository;
import application.models.Company;
import application.models.Product;
import application.models.Role;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductConverter {


    public Product toProductEntity(ProductDTO product){



        Product productEntity = new Product();


        productEntity.setPrice(product.getPrice());
        productEntity.setQuantity(product.getQuantity());
        productEntity.setName(product.getName());


        return productEntity;
    }

    public ProductDTO toProductDTO(Product productEntity) {

        ProductDTO product = new ProductDTO();

        product.setId(productEntity.getId());
        product.setPrice(productEntity.getPrice());
        product.setName(productEntity.getName());
        product.setQuantity(productEntity.getQuantity());


        return product;
    }

    //Converts every User Entity into a userDTO using method above
    public List<ProductDTO> toProductDTOS(List<Product> productEntities) {

        List<ProductDTO> productDTOS= new ArrayList<>();

        for(Product productEntity:productEntities) {
            productDTOS.add(toProductDTO(productEntity));
        }

        return productDTOS;
    }

}
//TODO Optimize the code above







