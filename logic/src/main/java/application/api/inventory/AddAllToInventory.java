package application.api.inventory;

import application.entity.PurchaseDetail;
import application.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AddAllToInventory {
    @Autowired
    private InventoryService inventoryService;

    @PutMapping("companies/{company}/inventory")
    public void addAllToInventory(@RequestBody List<PurchaseDetail> products) {
        inventoryService.addToinventory(products);
    }
}
