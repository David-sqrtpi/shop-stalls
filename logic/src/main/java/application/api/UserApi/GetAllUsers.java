package application.api.UserApi;

import application.models.User;
import application.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin
public class GetAllUsers {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Iterable<User> getAll() {
        System.out.println("all");
        return userRepository.findAll();

    }

}