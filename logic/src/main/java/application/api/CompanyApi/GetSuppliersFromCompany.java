package application.api.CompanyApi;

import application.Repository.SupplierRepository;
import application.entity.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("companies/{id}/suppliers")
public class GetSuppliersFromCompany {
    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping
    public List<Supplier> getProducts(@PathVariable long id) {
        return supplierRepository.findByCompanyId(id);
    }
}
