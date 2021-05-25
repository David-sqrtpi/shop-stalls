package application.api.ServicesApi;

import application.Repository.ServiceRepository;
import application.entity.Service;
import application.services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("services")
@CrossOrigin
public class AddService {
    @Autowired
    private Services services;

    @PostMapping
    public void add(@RequestBody Service service) {
        services.addService(service);
    }
}
