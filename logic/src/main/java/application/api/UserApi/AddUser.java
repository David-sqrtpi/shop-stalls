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
    public String add (@RequestBody UserDTO user){

        RepositoryUserService.save(userConverter.toUserEntity(user));

        return "Saved";
    }
}
