package application.Repository;

import application.entity.PurchaseDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseDetailRepository extends JpaRepository<PurchaseDetail, Long> {
    boolean existsByPurchaseIdAndProductId(long purchase, long product);
    PurchaseDetail findByPurchaseIdAndProductId(long purchase, long product);
    List<PurchaseDetail> findByPurchaseId(long purchase);
}
