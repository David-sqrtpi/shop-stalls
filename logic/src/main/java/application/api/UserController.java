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

    @PostMapping("create")
    public String create (@RequestParam String name, @RequestParam String email, @RequestParam String password,
                          @RequestParam int age, @RequestParam int id_company){

        User user = new User(0, name, email, password, age, id_company);
        userRepository.save(user);

        return "Saved";

    }

    @GetMapping("get-all")
    public Iterable<User> getAll() {

        return userRepository.findAll();
    }

}
