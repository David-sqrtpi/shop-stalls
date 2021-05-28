package application.api.inventory;

import application.entity.Inventory;
import application.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GetInventoryProduct {
    @Autowired
    private InventoryService inventoryService;

    @GetMapping("companies/{company}/inventory/{productBarcode}")
    public Inventory getInventoryProduct(@PathVariable long company,
                                         @PathVariable long productBarcode) {
        return inventoryService.getOne(company, productBarcode);
    }
}