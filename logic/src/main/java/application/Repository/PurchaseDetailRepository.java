package application.Repository;

import application.entity.PurchaseDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseDetailRepository extends JpaRepository<PurchaseDetail, Long> {
    boolean existsByPurchaseIdAndProductId(long purchase, long product);
    PurchaseDetail findByPurchaseIdAndProductId(long purchase, long product);
}
