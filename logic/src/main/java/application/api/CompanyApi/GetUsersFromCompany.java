package application.api.CompanyApi;
import application.Repository.CompanyRepository;
import application.Repository.UserRepository;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{company}/users")
public class GetUsersFromCompany {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping
    public List<User> get(@PathVariable int company){
        System.out.println("company");
        return userRepository.findByCompanyId(company);
    }
}
