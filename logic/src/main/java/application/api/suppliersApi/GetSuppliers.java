package application.api.suppliersApi;

import application.Repository.SupplierRepository;
import application.entity.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("supplieres")
@CrossOrigin
public class GetSuppliers {
    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping
    public List<Supplier> getAll() {
        return supplierRepository.findAll();
    }
}
