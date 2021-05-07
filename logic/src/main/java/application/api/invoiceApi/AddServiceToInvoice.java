package application.api.invoiceApi;

import application.services.InvoiceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddServiceToInvoice {

    @Autowired
    private InvoiceDetailService invoiceDetailService;

    @PutMapping("invoices/{invoice}/service")
    public void addService(@PathVariable long invoice,
                           @RequestParam long service) {
        invoiceDetailService.addService(invoice, service);
    }
}
