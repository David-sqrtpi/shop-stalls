package application.services;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;

public interface RepositoryCompanyService extends CrudRepository<Company, Integer> {
}
