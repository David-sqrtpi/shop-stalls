package application.Repository;

import application.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


public interface ProductRepository extends JpaRepository<Product, Integer> {

    Product findById(int id);

}
