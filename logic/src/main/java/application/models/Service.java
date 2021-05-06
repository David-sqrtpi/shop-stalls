package application.models;

import application.enums.State;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Service {
    @Id
    private long id;
    @ManyToOne
    private Company company;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;
    private String name;
    private long price;
    private String characteristics;
}
