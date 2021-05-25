package application.api.ServicesApi;

import application.entity.Service;
import application.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("services")
@CrossOrigin
public class AddService {
    @Autowired
    private ServiceService serviceService;

    @PostMapping
    public void add(@RequestBody Service service) {
        serviceService.addService(service);
    }
}
