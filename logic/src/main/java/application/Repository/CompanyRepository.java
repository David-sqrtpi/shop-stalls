package application.Repository;

import application.models.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface CompanyRepository extends CrudRepository<Company, Integer> {
    Company findById(int companyId);
}
