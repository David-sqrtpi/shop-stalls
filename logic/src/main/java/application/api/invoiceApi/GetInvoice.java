package application.api.invoiceApi;

import application.Repository.InvoiceDetailRepository;
import application.Repository.InvoiceRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class GetInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    @GetMapping("invoices/{invoice}")
    public Invoice getInvoice(@PathVariable long invoice) {

        Invoice invoice1 = invoiceRepository.findById(invoice);

        invoice1.setTotal(getInvoiceTotal(invoice));

        return invoice1;
    }

    //TODO create a DTO for retrieve all invoice details in one request
    @GetMapping("invoices/{invoice}/items")
    public List<InvoiceDetail> getInvoiceItems(@PathVariable long invoice) {
        return invoiceDetailRepository.findByInvoiceId(invoice);
    }

    private long getInvoiceTotal(long invoice) {
         List<InvoiceDetail> items = invoiceDetailRepository.findByInvoiceId(invoice);

         long total = 0;

         for (InvoiceDetail item:items) {
             total += item.getSubtotal();
         }

         return total;
    }

}
