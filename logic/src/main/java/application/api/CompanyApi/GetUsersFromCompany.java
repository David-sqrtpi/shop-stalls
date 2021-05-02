package application.api.CompanyApi;

import application.DTO.UserDTO;
import application.Repository.UserRepository;
import application.util.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{id}/users")
public class GetUsersFromCompany {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserConverter userConverter;

    @GetMapping
    public List<UserDTO> getUsers(@PathVariable long id){
        System.out.println("id");
        return userConverter.fromEntity(userRepository.findByCompanyId(id));
    }
}
