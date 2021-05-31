package application.Repository;

import application.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCompanyId(long id);
    boolean existsByCompanyIdAndBarcode(long company, String barcode);
    Product findByCompanyIdAndBarcode(long company, String barcode);
    Product findById(long productId);
}
