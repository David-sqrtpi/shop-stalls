package application.Repository;

import application.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByInventoryProductCompanyId(long company);
    Inventory findByProductId(long product);
}
