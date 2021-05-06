package application.api.UserApi;

import application.Repository.UserRepository;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin
public class AddUser {

    @Autowired
    private UserRepository RepositoryUserService;

    @PostMapping
    public void add(@RequestBody User user) {
        RepositoryUserService.save(user);
    }
}
