package application.api.invoiceApi;

import application.entity.Invoice;
import application.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CreateInvoice {
    @Autowired
    private InvoiceService invoiceService;

    @PostMapping("/invoices")
    public Invoice createInvoice() {
        return invoiceService.create();
    }
}