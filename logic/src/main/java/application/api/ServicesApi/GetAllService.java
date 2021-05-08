package application.api.ServicesApi;


import application.entity.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("services")
@CrossOrigin
public class GetAllService {
    @Autowired
    private application.Repository.ServiceRepository serviceRepository;

    @GetMapping
    public List<Service> getAll(@RequestParam long company) {
        return serviceRepository.findByCompanyId(company);
    }
}
