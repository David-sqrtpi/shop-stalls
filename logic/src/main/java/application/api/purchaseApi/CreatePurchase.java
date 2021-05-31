package application.api.purchaseApi;

import application.entity.Purchase;
import application.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class CreatePurchase {
    @Autowired
    private PurchaseService purchaseService;

    @PutMapping("purchases")
    public Purchase createPurchase(@RequestBody Purchase purchase) {
        return purchaseService.put(purchase);
    }
}