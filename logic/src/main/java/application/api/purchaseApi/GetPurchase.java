package application.api.purchaseApi;

import application.Repository.PurchaseDetailRepository;
import application.Repository.PurchaseRepository;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class GetPurchase {
    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;

    @GetMapping("purchases/{purchase}")
    public List<PurchaseDetail> getPurchase(@PathVariable long purchase) {
        return purchaseDetailRepository.findByPurchaseId(purchase);
    }
}