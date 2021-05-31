package application.api.purchaseDetailApi;

import application.entity.PurchaseDetail;
import application.services.PurchaseDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AddItemsToPurchase {
    @Autowired
    private PurchaseDetailService purchaseDetailService;

    @PostMapping("purchases/{purchase}")
    public void addItemsToPurchase(@RequestBody List<PurchaseDetail> items) {
        purchaseDetailService.addPurchaseDetails(items);
    }
}
