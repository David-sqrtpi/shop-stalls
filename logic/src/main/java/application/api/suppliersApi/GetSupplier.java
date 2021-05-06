package application.api.suppliersApi;

import application.Repository.SupplierRepository;
import application.models.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("suppliers")
@CrossOrigin
public class GetSupplier {
    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping("/{supplier}")
    public Supplier get(@PathVariable long supplier) {
        return supplierRepository.findById(supplier);
    }
}
