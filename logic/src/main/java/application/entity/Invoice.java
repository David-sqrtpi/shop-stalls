package application.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String clientName;
    private Date date;
    private long total;
}
