package application.entity;

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
    private String code;
    private String name;
    private long price;
    private String details;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;
}
