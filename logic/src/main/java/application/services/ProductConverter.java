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
import application.util.DtoConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductConverter implements DtoConverter<Product, ProductDTO> {

    @Override
    public Product fromDto(ProductDTO dto) {
        Product product = new Product();
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());
        product.setName(dto.getName());
        product.setId(dto.getId());

        return product;
    }

    @Override
    public ProductDTO fromEntity(Product entity) {
        ProductDTO productDto = new ProductDTO();

        productDto.setId(entity.getId());
        productDto.setPrice(entity.getPrice());
        productDto.setName(entity.getName());
        productDto.setQuantity(entity.getQuantity());

        return productDto;
    }

}







