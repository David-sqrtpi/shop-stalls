package application.Repository;

import application.models.Services;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface ServicesRepository extends CrudRepository<Services, Integer> {
}
