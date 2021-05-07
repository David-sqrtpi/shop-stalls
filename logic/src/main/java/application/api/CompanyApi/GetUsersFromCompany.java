package application.api.CompanyApi;

import application.Repository.UserRepository;
import application.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{id}/users")
public class GetUsersFromCompany {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getUsers(@PathVariable long id) {
        return userRepository.findByCompanyId(id);
    }
}