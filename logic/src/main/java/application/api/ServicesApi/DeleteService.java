package application.api.ServicesApi;

import application.Repository.ServiceRepository;
import application.enums.State;
import application.models.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DeleteService {

    @Autowired
    private ServiceRepository serviceRepository;

    @DeleteMapping("services/{service}")
    public void delete(@PathVariable long service) {
        Service service1 = serviceRepository.findById(service);
        service1.setState(State.NOT_AVAILABLE);
        serviceRepository.save(service1);
    }
}
