package application.api.invoiceApi;

import application.Repository.InvoiceRepository;
import application.models.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CreateInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @PostMapping("/invoices")
    public void create() {
        invoiceRepository.save(new Invoice());
    }
}
