package application.entity;

import application.enums.State;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Company company;
    private String name;
    private int minStock;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;
    private String barcode;
}
