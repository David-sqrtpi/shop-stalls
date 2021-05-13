package application.services;

import application.Repository.ProductRepository;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private InventoryService inventoryService;

    public void save(Product product) {
        if (!exists(product)) {
            Product product1 = productRepository.save(product);
            inventoryService.addProduct(product1);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product is registered already");
        }
    }

    private boolean exists(Product product) {
        return productRepository.existsByCompanyIdAndBarcode(product.getCompany().getId(), product.getBarcode());
    }
}
