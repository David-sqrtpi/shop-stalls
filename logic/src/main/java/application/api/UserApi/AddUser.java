package application.api.UserApi;

import application.api.DTO.UserDTO;
import application.models.User;
import application.Repository.UserRepository;
import application.services.ToUserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin
public class AddUser {

    @Autowired
    private UserRepository RepositoryUserService;

    @Autowired
    private ToUserEntity toUserEntity;

    @PostMapping
    public String add (@RequestBody UserDTO user){

        RepositoryUserService.save(toUserEntity.toUserEntity(user));

        return "Saved";
    }
}
