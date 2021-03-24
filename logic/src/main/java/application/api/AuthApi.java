package application.api;


import application.models.AuthRequest;
import application.services.AuthenticationManagerService;
import application.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthApi {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManagerService authenticationManagerService;

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) {
               /*
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            System.out.println("An error has occurred");
            e.printStackTrace();
        }

                */
        authenticationManagerService.authentication(authRequest);

        String token = jwtUtil.generateToken(authRequest.getUsername());

        System.out.println("this is the token: " + token);

        return token;

    }
}