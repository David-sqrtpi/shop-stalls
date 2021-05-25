package application.util;

import application.DTO.PurchaseDto;
import application.Repository.PurchaseDetailRepository;
import application.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseConverter implements DtoConverter<Purchase, PurchaseDto>{
    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;

    @Override
    public Purchase fromDto(PurchaseDto dto) {
        return null;
    }

    @Override
    public PurchaseDto fromEntity(Purchase entity) {
        PurchaseDto purchase = new PurchaseDto();
        //purchase.setId();
        purchase.setSupplier(entity.getSupplier());
        purchase.setDate(entity.getDate());
        purchase.setAmountToPay(entity.getAmountToPay());
        purchase.setProducts(purchaseDetailRepository.findByPurchaseId(entity.getId()));

        return purchase;
    }
}