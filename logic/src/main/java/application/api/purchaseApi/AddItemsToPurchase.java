package application.api.purchaseApi;

import application.Repository.PurchaseDetailRepository;
import application.entity.Purchase;
import application.entity.PurchaseDetail;
import application.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AddItemsToPurchase {

    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;
    @Autowired
    private InventoryService inventoryService;

    @PostMapping("purchase-items")
    public void addItemsToPurchase(@RequestBody List<PurchaseDetail> items) {
        inventoryService.addToinventory(items); //TODO Robert C Martin is not happy to see this (SOLID Violation)
        purchaseDetailRepository.saveAll(items);
    }
}
