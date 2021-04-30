package application.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ServiceDTO {
    private long id;
    private String name;
    private long price;
    private String characteristics;
}
