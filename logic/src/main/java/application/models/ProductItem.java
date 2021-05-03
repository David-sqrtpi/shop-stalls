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
public class ProductItem {
    @Id
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
