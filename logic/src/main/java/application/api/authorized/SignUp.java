package application.api.authorized;

import application.Repository.RepositoryUser;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SignUp {
    @Autowired
    private RepositoryUser RepositoryUserService;

    @PostMapping("/sign-up")
    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "User Created";

    }
}