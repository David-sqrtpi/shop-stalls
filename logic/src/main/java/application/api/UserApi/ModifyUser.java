package application.api.UserApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.util.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin
public class ModifyUser {

    @Autowired
    private UserConverter userConverter;

    @Autowired
    private UserRepository userRepository;

    @PutMapping("users")
    public void modify(@RequestBody UserDTO userDto) {
        userRepository.save(userConverter.fromDto(userDto));
    }
}