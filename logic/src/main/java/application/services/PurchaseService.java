package application.services;

import application.Repository.PurchaseRepository;
import application.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {
    @Autowired
    private PurchaseRepository purchaseRepository;

    public Purchase put(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    public Purchase get(long purchaseId) {
        return purchaseRepository.findById(purchaseId);
    }
}
