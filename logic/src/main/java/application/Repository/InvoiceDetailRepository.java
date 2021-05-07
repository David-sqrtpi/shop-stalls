package application.Repository;

import application.entity.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetail, Long> {
    List<InvoiceDetail> findByInvoiceId(long invoice);
    boolean existsByInvoiceIdAndProductId(long invoice, long product);
    InvoiceDetail findByInvoiceIdAndProductId(long invoice, long product);
}
