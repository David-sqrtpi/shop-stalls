package application.api.UserApi;

import application.Repository.UserRepository;
import application.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class GetUser {
    @Autowired
    private UserRepository repositoryUserService;

    @GetMapping("/{id}")
    public User getById(@PathVariable long id) {
        return repositoryUserService.findById(id);
    }

    @GetMapping("/email/{email}")
    public User getByEmail(@PathVariable String email) {
        return repositoryUserService.findByEmail(email);
    }
}
