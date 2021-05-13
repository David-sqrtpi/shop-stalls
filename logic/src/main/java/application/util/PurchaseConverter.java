package application.util;

import application.DTO.PurchaseDto;
import application.Repository.PurchaseDetailRepository;
import application.entity.Purchase;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        List<PurchaseDetail> products = purchaseDetailRepository.findByPurchaseId(entity.getId());

        return new PurchaseDto(entity, products);
    }
}
