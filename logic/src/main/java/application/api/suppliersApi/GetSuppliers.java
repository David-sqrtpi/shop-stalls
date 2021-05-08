package application.api.suppliersApi;

import application.Repository.SupplierRepository;
import application.entity.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("suppliers")
@CrossOrigin
public class GetSuppliers {
    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping()
    public List<Supplier> getAll(@RequestParam long company) {
        return supplierRepository.findByCompanyId(company);
    }
}
