package application.Repository;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;


public interface CompanyRepository extends CrudRepository<Company, Long> {
    Company findById(long companyId);
}
