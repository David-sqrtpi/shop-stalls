package application.api.invoiceApi;

import application.models.Invoice;
import application.services.ProductItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddProductToInvoice {

    @Autowired
    private ProductItemService productItemService;

    @PutMapping("invoices/{invoice}")
    public void addProduct(@PathVariable long invoice,
                           @RequestParam long product) {
        productItemService.create(invoice, product);
    }
}
