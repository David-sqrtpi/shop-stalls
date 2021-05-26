package application.api.invoiceApi;

import application.entity.Invoice;
import application.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ModifyInvoice {
    @Autowired
    private InvoiceService invoiceService;

    @PutMapping("invoices")
    public void modifyInvoice(@RequestBody Invoice invoice) {
        invoiceService.modifyInvoice(invoice);
    }
}
