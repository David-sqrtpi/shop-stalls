package application.api.invoiceApi;

import application.Repository.InvoiceRepository;
import application.entity.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@CrossOrigin
@RestController
public class CreateInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @PostMapping("/invoices")
    public Invoice create() {
        return invoiceRepository.save(new Invoice());
    }
}
