package application.api.ServicesApi;

import application.DTO.ServiceDTO;
import application.Repository.ServiceRepository;
import application.models.Service;
import application.util.ServiceConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/services")
public class GetService {
    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceConverter serviceConverter;

    @GetMapping("/{id}")
    public Service get(@PathVariable long id) {
        return serviceRepository.findById(id);
    }
}
