package application.api.ServicesApi;


import application.DTO.ProductDTO;
import application.DTO.ServiceDTO;
import application.models.Service;
import application.services.ProductConverter;
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
    private ProductConverter serviceConverter;
    @Autowired
    private application.Repository.ProductRepository ServiceRepository;

    @GetMapping
    public List<ServiceDTO> getAll() {
        return serviceConverter.fromEntity(ServiceRepository.findAll());
    }

    
}
