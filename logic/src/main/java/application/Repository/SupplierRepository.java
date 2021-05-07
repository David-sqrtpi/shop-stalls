package application.Repository;

import application.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    Supplier findById(long id);

    List<Supplier> findByCompanyId(long id);
}
