package application.api.purchaseApi;

import application.Repository.PurchaseRepository;
import application.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ModifyPurchase {
    @Autowired
    private PurchaseRepository purchaseRepository;

    @PutMapping("purchases")
    public void modifyPurchase(@RequestBody Purchase purchase) {
        purchaseRepository.save(purchase);
    }

}
