package application.services;


import application.DTO.ServiceDTO;
import application.util.DtoConverter;
import org.springframework.stereotype.Service;

@Service
public class ServiceConverter implements DtoConverter<application.models.Service, ServiceDTO> {


    @Override

    public application.models.Service fromDto(ServiceDTO dto) {
        application.models.Service service = new application.models.Service();
        service.setPrice(dto.getPrice());
        service.setCharacteristics(dto.getCharacteristics());
        service.setName_service(dto.getName());
        service.setId(dto.getId());

        return service;
    }

    @Override
    public ServiceDTO fromEntity(application.models.Service entity) {
        return null;
    }

    @Override
    public ServiceDTO fromEntity(Service entity) {
        ServiceDTO serviceDto = new ServiceDTO();

        serviceDto.setId(entity.getId());
        serviceDto.setPrice(entity.getPrice());
        serviceDto.setName(entity.getName());
        serviceDto.setCharacteristics(entity.getCharacteristics());

        return serviceDto;
    }

}
