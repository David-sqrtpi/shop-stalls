package application.api.authorized;

import application.Repository.UserRepository;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SignUp {
    @Autowired
    private UserRepository RepositoryUserService;

    @PostMapping("/sign-up")
    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "User Created";

    }
}