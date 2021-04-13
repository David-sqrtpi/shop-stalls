package application.api.UserApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.models.User;
import application.services.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class GetUser {
    @Autowired
    private UserRepository repositoryUserService;

    @Autowired
    private UserConverter userConverter;

    @GetMapping("/{id}")
    public UserDTO getById(@PathVariable int id) {
        return userConverter.toUserDTO(repositoryUserService.findById(id));
    }

    @GetMapping("/email/{email}")
    public UserDTO getByEmail(@PathVariable String email) {
        return userConverter.toUserDTO(repositoryUserService.findByEmail(email));
    }
}
