package application.api.UserApi;

import application.models.User;
import application.services.RepositoryUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user/all")
@CrossOrigin("*")
public class GetAllUsers {

    @Autowired
    private RepositoryUserService repositoryUserService;

    @GetMapping("")
    public Iterable<User> getAll() {

        return repositoryUserService.findAll();

    }

}