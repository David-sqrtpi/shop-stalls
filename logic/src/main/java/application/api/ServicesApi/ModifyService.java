package application.api.ServicesApi;
import application.models.Services;
import application.Repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("services")
@CrossOrigin
public class ModifyService {
    @Autowired
    ServicesRepository servicesRepository;
    @PutMapping ("modify")

    public Services add (@RequestBody Services services){
        System.out.println(services.getId());
        servicesRepository.save(services);
        return  services;

    }

}
