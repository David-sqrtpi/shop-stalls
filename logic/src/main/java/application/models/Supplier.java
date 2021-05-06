package application.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Company company;
    private String name;
    private String address;
    private String phoneNumber;
}
