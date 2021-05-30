package application.api.purchaseApi;

import application.Repository.PurchaseRepository;
import application.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class CreatePurchase {
    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("purchases")
    public Purchase createPurchase(@RequestBody Purchase purchase) {
        return purchaseRepository.save(purchase);
    }
}