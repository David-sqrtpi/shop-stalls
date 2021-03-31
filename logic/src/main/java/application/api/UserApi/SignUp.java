package application.api.UserApi;

import application.Repository.RepositoryUser;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sign-up")
public class SignUp {
    @Autowired
    private RepositoryUser RepositoryUserService;

    @PostMapping
    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "User Created";

    }
}
