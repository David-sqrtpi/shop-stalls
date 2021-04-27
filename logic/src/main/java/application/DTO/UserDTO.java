package application.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
@Setter
public class UserDTO {
    private long id;
    private String name;
    private String email;
    private String password;
    private int age;
    private long companyId;
    private String companyName;
    private List<Long> roleIds = new ArrayList<>();
    private List<String> roleNames = new ArrayList<>();
}
