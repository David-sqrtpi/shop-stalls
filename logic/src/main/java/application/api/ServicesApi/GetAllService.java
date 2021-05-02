package application.api.ServicesApi;


import application.DTO.ServiceDTO;
import application.util.ServiceConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("services")
@CrossOrigin
public class GetAllService {
    @Autowired
    private ServiceConverter serviceConverter;
    @Autowired
    private application.Repository.ServiceRepository serviceRepository;

    @GetMapping
    public List<ServiceDTO> getAll() {
        return serviceConverter.fromEntity(serviceRepository.findAll());
    }

    
}
