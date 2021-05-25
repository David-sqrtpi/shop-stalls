package application.services;

import application.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    public void addService(application.entity.Service service) {
        if (exists(service)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Service already exists");
        } else {
            serviceRepository.save(service);
        }
    }

    private boolean exists(application.entity.Service service) {
        return serviceRepository.existsByCompanyIdAndCode(service.getCompany().getId(), service.getCode());
    }
}
