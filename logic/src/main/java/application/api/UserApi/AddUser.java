package application.api.UserApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.services.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin
public class AddUser {

    @Autowired
    private UserRepository RepositoryUserService;

    @Autowired
    private UserConverter userConverter;

    @PostMapping
    public void add (@RequestBody UserDTO userDTO){

        RepositoryUserService.save(userConverter.fromDto(userDTO));

    }
}
