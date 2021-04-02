package application.api.authorized;

import application.models.AuthRequest;
import application.services.AuthenticationService;
import application.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Login {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public String generateToken(@RequestBody AuthRequest authRequest) {

        authenticationService.authentication(authRequest);

        String token = jwtUtil.generateToken(authRequest.getUsername());

        System.out.println("this is the token: " + token);

        return token;

    }
}