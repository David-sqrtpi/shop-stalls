package application.api.CompanyApi;

import application.models.Company;
import application.Repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("companies")
@CrossOrigin
public class ModifyCompany {

    @Autowired
    private CompanyRepository companyRepository;

    @PutMapping
    public void modify(@RequestBody Company company) {
        companyRepository.save(company);
    }

}
