package application.api.UserApi;

import application.models.User;
import application.Repository.RepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("user/modify")
public class ModifyUser {

    @Autowired
    private RepositoryUser RepositoryUserService;

    @PutMapping

    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "Saved";

    }
}