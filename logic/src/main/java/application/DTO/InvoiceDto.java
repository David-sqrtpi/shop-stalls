package application.DTO;

import application.entity.InvoiceDetail;
import application.entity.Sale;
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
public class InvoiceDto {
    private long id;
    private Sale sale;
    private String clientName;
    private long dni;
    private Date date;
    private long total;
    private List<InvoiceDetail> items;
}