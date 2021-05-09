package application.Repository;

import application.entity.InventoryProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryProductRepository extends JpaRepository<InventoryProduct, Long> {
    List<InventoryProduct> findByInventoryCompanyId(long company);
}
