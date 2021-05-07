package application.api.CompanyApi;

import application.Repository.CompanyRepository;
import application.entity.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/companies")
public class GetCompany {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/{id}")
    public Company get(@PathVariable long id){
        return companyRepository.findById(id);
    }

}
