package application.api.invoiceApi;

import application.Repository.InvoiceRepository;
import application.Repository.ProductItemRepository;
import application.models.Invoice;
import application.models.ProductItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class GetInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductItemRepository productItemRepository;

    @GetMapping("invoices/{invoice}")
    public Invoice getInvoice(@PathVariable long invoice) {

        Invoice invoice1 = invoiceRepository.findById(invoice);

        invoice1.setTotal(getInvoiceTotal(invoice));

        return invoice1;
    }

    //TODO create a DTO for retrieve all invoice details in one request
    @GetMapping("invoices/{invoice}/items")
    public List<ProductItem> getInvoiceItems(@PathVariable long invoice) {
        return productItemRepository.findByInvoiceId(invoice);
    }

    private long getInvoiceTotal(long invoice) {
         List<ProductItem> items = productItemRepository.findByInvoiceId(invoice);

         long total = 0;

         for (ProductItem item:items) {
             total += item.getSubtotal();
         }

         return total;
    }

}
