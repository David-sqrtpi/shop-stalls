package application.api.UserApi;

import application.Repository.UserRepository;
import application.entity.User;
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
    public List<User> getAll(@RequestParam long company) {
        return userRepository.findByCompanyId(company);
    }
}