package application.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity // This tells Hibernate to make a table out of this class
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    private String name;

    @Column(unique=true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private int age;

    private int id_company;

    @ManyToMany
    private List<Role> roles;

}
