package application.Repository;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface RepositoryCompany extends CrudRepository<Company, Integer> {
}
