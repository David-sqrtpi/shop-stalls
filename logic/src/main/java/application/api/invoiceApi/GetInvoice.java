package application.api.invoiceApi;

import application.DTO.InvoiceDto;
import application.Repository.InvoiceRepository;
import application.entity.Invoice;
import application.util.InvoiceConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class GetInvoice {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private InvoiceConverter invoiceConverter;

    @GetMapping("invoices/{invoice}")
    public InvoiceDto getInvoice(@PathVariable long invoice) {
        Invoice invoice1 = invoiceRepository.findById(invoice);

        return invoiceConverter.fromEntity(invoice1);
    }

}
