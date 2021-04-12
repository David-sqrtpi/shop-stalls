package application.api.CompanyApi;

import application.Repository.CompanyRepository;
import application.models.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/companies")
public class getCompany {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/{companyId}")
    public Company test(@PathVariable int companyId){
        return companyRepository.findById(companyId);
    }

}
