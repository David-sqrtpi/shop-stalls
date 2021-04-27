package application.DTO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
public class ProductDTO {
    private long id;
    private String name;
    private int quantity;
    private long price;
}
