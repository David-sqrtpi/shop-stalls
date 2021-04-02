package application.api.UserApi;

import application.models.User;
import application.Repository.RepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user/all")
@CrossOrigin
public class GetAllUsers {

    @Autowired
    private RepositoryUser repositoryUserService;

    @GetMapping
    public Iterable<User> getAll() {

        return repositoryUserService.findAll();

    }

}