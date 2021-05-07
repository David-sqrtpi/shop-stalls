package application.api.ServicesApi;

import application.Repository.ServiceRepository;
import application.entity.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("services")
@CrossOrigin
public class AddService {
    @Autowired
    ServiceRepository servicesRepository;

    @PostMapping
    public void add(@RequestBody Service service) {
        servicesRepository.save(service);
    }

}
