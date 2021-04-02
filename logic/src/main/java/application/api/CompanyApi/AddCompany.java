package application.api.CompanyApi;

import application.models.Company;
import application.Repository.RepositoryCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("company/add")
@CrossOrigin
public class AddCompany {

    @Autowired
    private RepositoryCompany repositoryCompanyService;

    @PostMapping
    public String add(@RequestBody Company company) {

        repositoryCompanyService.save(company);

        return "Saved";
    }

}
