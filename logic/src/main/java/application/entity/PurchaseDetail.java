package application.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PurchaseDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Purchase purchase;
    @ManyToOne
    private Product product;
    private int quantity;
    private long price;

    public PurchaseDetail (Purchase purchase, Product product, int quantity, long price) {
        this.purchase = purchase;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}