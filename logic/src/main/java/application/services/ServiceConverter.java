package application.services;

import application.DTO.ProductDTO;
import application.DTO.ServiceDTO;
import application.models.Product;
import application.util.DtoConverter;
import org.springframework.stereotype.Service;

@Service
public class ServiceConverter implements DtoConverter<Service, ServiceDTO> {


    @Override

    public Service fromDto(ServiceDTO dto) {
        Service service = new Service();

        service.setPrice(dto.getPrice());
        service.setcharacteristics(dto.getcharacteristics());
        service.setName(dto.getName());
        service.setId(dto.getId());

        return service;
    }

    @Override
    public ServiceDTO fromEntity(Service entity) {
        ServiceDTO serviceDto = new ServiceDTO();

        serviceDto.setId(entity.getId());
        serviceDto.setPrice(entity.getPrice());
        serviceDto.setName(entity.getName());
        serviceDto.setcharacteristics(entity.getcharacteristics());

        return serviceDto;
    }

}
