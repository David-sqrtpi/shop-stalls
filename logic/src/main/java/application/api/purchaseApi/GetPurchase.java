package application.api.purchaseApi;

import application.DTO.PurchaseDto;
import application.services.PurchaseService;
import application.util.PurchaseConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GetPurchase {
    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private PurchaseConverter purchaseConverter;

    @GetMapping("purchases/{purchase}")
    public PurchaseDto getPurchase(@PathVariable long purchaseId) {
        return purchaseConverter.fromEntity(purchaseService.get(purchaseId));
    }
}