package application.models;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DetailPurchase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Purchase purchase;
    @ManyToOne
    private Product product;
    private int quantity;
    private long cost;
}