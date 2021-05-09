package application.api.inventory;

import application.Repository.InventoryProductRepository;
import application.entity.InventoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class GetInventory {
    @Autowired
    private InventoryProductRepository inventoryProductRepository;

    @GetMapping("companies/{company}/inventory")
    public List<InventoryProduct> get(@PathVariable long company) {
        return inventoryProductRepository.findByInventoryCompanyId(company);
    }
}
