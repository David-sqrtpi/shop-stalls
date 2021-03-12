package application.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor @Getter @Setter
public class Product {

    @Id
    private String id;
    private String name;
    private int quantity;
    private int price;

}
