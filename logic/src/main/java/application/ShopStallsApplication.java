package application;

import application.Repository.CompanyRepository;
import application.Repository.UserRepository;
import application.models.Company;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class ShopStallsApplication {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    public static void main(String[] args) {
        SpringApplication.run(ShopStallsApplication.class, args);
    }

    @PostConstruct
    public void init(){
        Company company = new Company();
        company.setId(1);
        companyRepository.save(company);

        User user = new User();
        user.setId(2);
        user.setPassword("asdasdasd");
        user.setName("root");
        user.setEmail("a@a");
        user.setCompany(company);
        userRepository.save(user);
    }
}