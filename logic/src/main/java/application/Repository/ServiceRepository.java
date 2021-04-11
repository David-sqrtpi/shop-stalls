package application.Repository;

import application.models.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ServiceRepository extends CrudRepository<Service, Integer> {
}