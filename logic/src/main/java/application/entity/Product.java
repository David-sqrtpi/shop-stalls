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
    private long id;
    @ManyToOne
    private Company company;
    private String name;
    private long price;
    private int minStock;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;
}
