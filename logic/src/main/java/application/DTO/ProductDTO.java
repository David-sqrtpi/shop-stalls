package application.DTO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
public class ProductDTO {
    private int id;
    private String name;
    private int price;
    private int quantity;
}
