package application.api.UserApi;

import application.models.User;
import application.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user/modify")
@CrossOrigin
public class ModifyUser {

    @Autowired
    private UserRepository RepositoryUserService;

    @PutMapping

    public String add (@RequestBody User user){

        RepositoryUserService.save(user);

        return "Saved";

    }
}