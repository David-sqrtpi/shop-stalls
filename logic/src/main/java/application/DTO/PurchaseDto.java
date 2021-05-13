package application.DTO;

import application.entity.Purchase;
import application.entity.PurchaseDetail;
import application.entity.Supplier;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PurchaseDto {
    private Purchase purchase;
    private List<PurchaseDetail> products;
}
