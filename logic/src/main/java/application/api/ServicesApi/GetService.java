package application.api.ServicesApi;

import application.Repository.ServiceRepository;
import application.entity.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/services")
public class GetService {
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/{id}")
    public Service get(@PathVariable long id) {
        return serviceRepository.findById(id);
    }
}
