package application.Repository;

import application.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findById(long id);

}
