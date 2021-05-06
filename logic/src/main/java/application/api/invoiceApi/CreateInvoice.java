package application.api.invoiceApi;

import application.Repository.InvoiceRepository;
import application.models.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin
@RestController
public class CreateInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @PostMapping("/invoices")
    public Invoice create(@RequestBody Invoice invoice) {
        invoice.setDate(new Date());
        return invoiceRepository.save(invoice);
    }
}
