package application.api.UserApi;

import application.DTO.UserDTO;
import application.models.User;
import application.Repository.UserRepository;
import application.services.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin
public class GetAllUsers {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserConverter userConverter;

    @GetMapping
    public List<UserDTO> getAll() {
        System.out.println("all");
        return userConverter.toUserDTOS(userRepository.findAll());
    }

}