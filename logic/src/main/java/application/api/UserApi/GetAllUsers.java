package application.api.UserApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.util.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return userConverter.fromEntity(userRepository.findAll());
    }

}