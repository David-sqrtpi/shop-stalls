package application.Repository;

import application.models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {

        Service findById(long id);

        }
