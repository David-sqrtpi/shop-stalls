package application.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InvoiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Invoice invoice;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Service service;
    private int quantity;
    private long price;
}
