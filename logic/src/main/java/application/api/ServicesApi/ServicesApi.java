package application.api;

import application.models.Services;
import application.models.ServicesRepository;
import org.hibernate.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("services")
public class ServicesApi {
    @Autowired
    ServicesRepository servicesRepository;
    @PostMapping ("add")

        public Services add (@RequestBody Services services){
        System.out.println(services.getId());
        servicesRepository.save(services);
        return  services;

    }

}
