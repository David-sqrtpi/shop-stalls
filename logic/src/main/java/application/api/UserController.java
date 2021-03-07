package application.api;

import application.models.User;
import application.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("add")
    public String add (@RequestBody User user){

        user.setId_company(1);

        userRepository.save(user);

        return "Saved";

    }

    @GetMapping("all")
    public Iterable<User> getAll() {

        return userRepository.findAll();
    }

}
