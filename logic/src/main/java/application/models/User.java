package application.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity // This tells Hibernate to make a table out of this class
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(unique=true, nullable=false)
    private String email;

    @Column(nullable = false)
    private String password;

    private int age;

    @ManyToOne
    private Company company;

    @ManyToMany
    @Column(nullable = false)
    private List<Role> roles = new ArrayList<>();

    public void addRole(Role role){
        this.roles.add(role);
    }

}
