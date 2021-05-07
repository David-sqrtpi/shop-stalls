package application.api.CompanyApi;

import application.Repository.ServiceRepository;
import application.entity.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{id}/services")
public class GetServicesFromCompany {
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping
    public List<Service> getServices(@PathVariable long id) {
        return serviceRepository.findByCompanyId(id);
    }
}
