package application.api.ServicesApi;

import application.DTO.ProductDTO;
import application.DTO.ServiceDTO;
import application.Repository.ServiceRepository;
import application.services.ServiceConverter;
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
    public ServiceDTO get(@PathVariable long id) {
        return serviceConverter.fromEntity(serviceRepository.findById(id));
    }
}
