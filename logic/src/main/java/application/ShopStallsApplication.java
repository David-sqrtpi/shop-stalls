package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class ShopStallsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopStallsApplication.class, args);
    }

}
//TODO add a x-www-urlformencoded header and then delete the @RequestBody annotation