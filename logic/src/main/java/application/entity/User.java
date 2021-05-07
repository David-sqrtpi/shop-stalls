package application.entity;

import application.enums.State;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Company company;
    @Column(nullable = false)
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    private int age;
    @Enumerated(value = EnumType.STRING)
    private State state = State.AVAILABLE;

    @ManyToMany
    @Column(nullable = false)
    private List<Role> roles = new ArrayList<>();

    public void addRole(Role role) {
        this.roles.add(role);
    }
}
