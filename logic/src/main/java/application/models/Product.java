package application.models;

import application.enums.State;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Data
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
