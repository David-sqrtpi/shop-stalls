package application.api.purchaseApi;

import application.Repository.PurchaseDetailRepository;
import application.entity.Purchase;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AddItemsToPurchase {

    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;

    @PutMapping("purchases")
    public void addItemsToPurchase(@RequestBody List<PurchaseDetail> items) {
        purchaseDetailRepository.saveAll(items);
    }
}
