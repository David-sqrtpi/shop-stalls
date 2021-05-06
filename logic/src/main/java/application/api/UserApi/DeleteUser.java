package application.api.UserApi;

import application.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DeleteUser {

    @Autowired
    private UserRepository userRepository;

    @DeleteMapping("users/{user}")
    public void delete(@PathVariable long user) {
        userRepository.deleteById(user);
    }
}
