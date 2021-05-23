package application.api.invoiceDetailApi;

import application.entity.InvoiceDetail;
import application.services.InvoiceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AddItemsToInvoice {
    @Autowired
    private InvoiceDetailService invoiceDetailService;

    @PostMapping("invoices/{invoice}")
    public void addItemsToInvoice(@RequestBody List<InvoiceDetail> items) {
        invoiceDetailService.addAllInvoiceDetail(items);
    }
}
