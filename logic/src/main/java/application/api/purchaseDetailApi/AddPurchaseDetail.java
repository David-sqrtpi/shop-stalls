package application.api.purchaseDetailApi;

import application.entity.PurchaseDetail;
import application.services.PurchaseDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AddPurchaseDetail {
    @Autowired
    private PurchaseDetailService purchaseDetailService;

    @PostMapping("purchase/{purchase}")
    public void addPurchaseDetail(@PathVariable long purchase,
                                 @RequestBody PurchaseDetail purchaseDetail) {
        purchaseDetail.getPurchase().setId(purchase);
        purchaseDetailService.addPurchaseDetail(purchaseDetail);
    }
}