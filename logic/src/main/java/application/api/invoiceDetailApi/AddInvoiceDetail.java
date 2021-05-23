package application.api.invoiceDetailApi;

import application.entity.InvoiceDetail;
import application.services.InvoiceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddInvoiceDetail {
    @Autowired
    private InvoiceDetailService invoiceDetailService;

    @PostMapping("invoice/{invoice}") //TODO Temp Test
    public void addInvoiceDetail(@PathVariable long invoice,
                                 @RequestBody InvoiceDetail invoiceDetail) {
        invoiceDetail.getInvoice().setId(invoice);
        invoiceDetailService.addInvoiceDetail(invoiceDetail);
    }
}
