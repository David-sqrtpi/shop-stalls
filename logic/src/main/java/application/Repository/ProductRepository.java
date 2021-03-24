package application.Repository;

import application.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface ProductRepository extends CrudRepository<Product, Integer> {

}
