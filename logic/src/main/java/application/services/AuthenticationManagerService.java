package application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import application.models.AuthRequest;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationManagerService {
    @Autowired
    private AuthenticationManager authenticationManager;

    public boolean authentication ( AuthRequest authRequest){

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
       return true ;
    }
}
