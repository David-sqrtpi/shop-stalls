package application.Repository;

import application.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findById(long productId);

    Product findByCompanyIdAndId(long company, long productId);

    List<Product> findByCompanyId(long id);
}
