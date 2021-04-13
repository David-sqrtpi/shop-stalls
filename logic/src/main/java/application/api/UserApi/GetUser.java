package application.api.UserApi;

import application.Repository.UserRepository;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GetUser {

    @Autowired
    private UserRepository repositoryUserService;

    @GetMapping("users/{email}")
    public User get(@PathVariable String email) {

        return repositoryUserService.findByEmail(email);

    }

}
