package application.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity // This tells Hibernate to make a table out of this class
public class Service {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String name_service;
    private String price;
    private String characteristics;

}
