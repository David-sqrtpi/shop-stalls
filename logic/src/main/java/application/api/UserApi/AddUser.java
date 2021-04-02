package application.api.UserApi;

import application.models.User;
import application.Repository.RepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/add")
@CrossOrigin
public class AddUser {

    @Autowired
    private RepositoryUser RepositoryUserService;

    @PostMapping
    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "Saved";

    }
}
