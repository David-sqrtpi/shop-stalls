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
    private int id;
    private String name;
    private String email;
    private String password;
    private int age;
    private int companyId;
    private List<Integer> roleIds = new ArrayList<>();
    private String companyName;
    private List<String> roleNames = new ArrayList<>();
}
