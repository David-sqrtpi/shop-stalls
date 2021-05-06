package application.models;

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
    private long id;
    @ManyToOne
    private Company company;
    private String name;
    private int quantity;
    private long price;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;
}
