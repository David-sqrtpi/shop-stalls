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
    private long subtotal;

    public InvoiceDetail(Invoice invoice, Product product, int quantity) {
        this.invoice = invoice;
        this.product = product;
        this.quantity = quantity;
        this.subtotal = product.getPrice() * quantity;
    }

    public InvoiceDetail(Invoice invoice, Service service) {
        this.invoice = invoice;
        this.service = service;
        this.subtotal = service.getPrice();
    }
}
