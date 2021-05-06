package application.models;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Invoice invoice;
    @ManyToOne
    private Product product;
    private int quantity;
    private long subtotal;

    public ProductItem(Invoice invoice, Product product, int quantity) {
        this.invoice = invoice;
        this.product = product;
        this.quantity = quantity;
        this.subtotal = product.getPrice() * quantity;
    }
}
