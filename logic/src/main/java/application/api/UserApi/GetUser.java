package application.api.UserApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.models.User;
import application.services.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GetUser {
    @Autowired
    private UserRepository repositoryUserService;

    @Autowired
    private UserConverter userConverter;

    @GetMapping("users/{email}")
    public UserDTO get(@PathVariable String email) {
        return userConverter.toUserDTO(repositoryUserService.findByEmail(email));
    }
}
