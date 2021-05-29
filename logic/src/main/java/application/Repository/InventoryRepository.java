package application.Repository;

import application.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByProductCompanyId(long company);
    Inventory findByProductCompanyIdAndProductBarcode(long company, String barcode);
    boolean existsByProductId(long product);
    Inventory findByProductId(long product);
}
