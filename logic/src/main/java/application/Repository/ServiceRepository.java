package application.Repository;

import application.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Long> {

    Service findById(long id);

    List<Service> findByCompanyId(long id);

    Service findByCompanyIdAndCode(long company, String code);
}
