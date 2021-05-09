package application.api.purchaseApi;

import application.Repository.PurchaseRepository;
import application.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CreatePurchase {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("purchases")
    public Purchase createPurchase() {
        return purchaseRepository.save(new Purchase());
    }
}