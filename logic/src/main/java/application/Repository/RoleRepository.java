package application.Repository;

import application.models.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoleRepository extends CrudRepository<Role, Integer>{
    Role findById(int roleId);
}
