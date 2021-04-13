package application.api.CompanyApi;
import application.DTO.UserDTO;
import application.Repository.CompanyRepository;
import application.Repository.UserRepository;
import application.models.User;
import application.services.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{company}/users")
public class GetUsersFromCompany {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserConverter userConverter;

    @GetMapping
    public List<UserDTO> get(@PathVariable int company){
        System.out.println("company");
        return userConverter.toUserDTOS(userRepository.findByCompanyId(company));
    }
}
