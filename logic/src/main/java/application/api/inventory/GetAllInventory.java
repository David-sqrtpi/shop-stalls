package application.api.inventory;

import application.Repository.InventoryRepository;
import application.entity.Inventory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class GetAllInventory {
    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("companies/{company}/inventory")
    public List<Inventory> get(@PathVariable long company) {
        return inventoryRepository.findByProductCompanyId(company);
    }
}
