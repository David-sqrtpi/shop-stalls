package application.api.invoiceApi;

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
                           @RequestParam long product,
                           @RequestParam int quantity) {
        productItemService.create(invoice, product, quantity);
    }
}
