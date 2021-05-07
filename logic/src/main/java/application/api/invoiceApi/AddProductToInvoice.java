package application.api.invoiceApi;

import application.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddProductToInvoice {

    @Autowired
    private InvoiceService productItemService;

    @PutMapping("invoices/{invoice}/product")
    public void addProduct(@PathVariable long invoice,
                           @RequestParam long product,
                           @RequestParam int quantity) {
        productItemService.addProduct(invoice, product, quantity);
    }
}
