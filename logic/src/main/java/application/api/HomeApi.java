package application.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeApi {

    @GetMapping
    public String welcome() {
        return "Welcome to this amazing video";
    }
}
