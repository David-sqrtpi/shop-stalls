package application.api.Repository;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;

public interface RepositoryCompany extends CrudRepository<Company, Integer> {
}
