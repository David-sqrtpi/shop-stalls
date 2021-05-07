package application.api.UserApi;

import application.Repository.UserRepository;
import application.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin
public class ModifyUser {

    @Autowired
    private UserRepository userRepository;

    @PutMapping("users")
    public void modify(@RequestBody User user) {
        userRepository.save(user);
    }
}