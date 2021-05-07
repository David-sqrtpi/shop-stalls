package application.api.invoiceApi;

import application.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddServiceToInvoice {

    @Autowired
    private InvoiceService invoiceService;

    @PutMapping("invoices/{invoice}/service")
    public void addService(@PathVariable long invoice,
                           @RequestParam long service) {
        invoiceService.addService(invoice, service);
    }
}
