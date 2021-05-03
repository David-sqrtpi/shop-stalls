package application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItem {
    @Id
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
