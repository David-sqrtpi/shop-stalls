package application.DTO;

import application.entity.Invoice;
import application.entity.InvoiceDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InvoiceDto {
    Invoice invoice;
    private List<InvoiceDetail> items;
}
