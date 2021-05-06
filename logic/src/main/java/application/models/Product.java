package application.models;

import application.enums.State;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Company company;

    @Column(unique = true)
    private long sku;

    private String name;
    private int quantity;
    private long price;
    private State state = State.AVAILABLE;
}
