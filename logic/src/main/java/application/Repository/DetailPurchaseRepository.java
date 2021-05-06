package application.Repository;

import application.models.DetailPurchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailPurchaseRepository extends JpaRepository<DetailPurchase, Long> {
}
