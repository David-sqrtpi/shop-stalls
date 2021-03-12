package application.api.UserApi;

import application.models.User;
import application.services.RepositoryUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user/add")
@CrossOrigin("*")
public class AddUser {

    @Autowired
    private RepositoryUserService RepositoryUserService;

    @PostMapping("")
    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "Saved";

    }
}
