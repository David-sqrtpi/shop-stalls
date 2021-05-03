package application.api.invoiceApi;

import application.services.ServiceItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddServiceToInvoice {

    @Autowired
    private ServiceItemService serviceItemService;

    @PutMapping("invoices/{invoice}")
    public void addService(@PathVariable long invoice,
                           @RequestParam long service,
                           @RequestParam int quantity) {
        serviceItemService.create(invoice, service, quantity);
    }
}
