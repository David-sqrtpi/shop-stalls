package application.Repository;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;


public interface CompanyRepository extends CrudRepository<Company, Integer> {
    Company findById(long companyId);
}
