package application.models;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ServiceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Invoice invoice;
    @ManyToOne
    private Service service;
    private int quantity;
    private long subtotal;

    public ServiceItem(Invoice invoice, Service service, int quantity) {
        this.invoice = invoice;
        this.service = service;
        this.quantity = quantity;
        this.subtotal = service.getPrice() * quantity;
    }
}
