package application.api.CompanyApi;

import application.models.Company;
import application.Repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("company")
@CrossOrigin
public class ModifyCompany {

    @Autowired
    private CompanyRepository repositoryCompanyService;

    @PutMapping("/{id}")
    public String add(@RequestBody Company company,
                      @PathVariable int id) {

        company.setId(id);
        repositoryCompanyService.save(company);

        return "Saved";
    }

}
