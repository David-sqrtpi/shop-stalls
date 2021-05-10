package application.util;

import application.DTO.PurchaseDto;
import application.entity.Purchase;

public class PurchaseConverter implements DtoConverter<Purchase, PurchaseDto>{

    @Override
    public Purchase fromDto(PurchaseDto dto) {
        return null;
    }

    @Override
    public PurchaseDto fromEntity(Purchase entity) {
        return null;
    }
}
