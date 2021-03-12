package application.services;

import application.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface RepositoryProductService extends CrudRepository<Product, Integer> {

}
