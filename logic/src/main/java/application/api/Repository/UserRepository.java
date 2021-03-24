package application.api.Repository;

import application.models.User;
import org.springframework.data.repository.CrudRepository;

public interface  UserRepository extends CrudRepository<User, Integer> {

}
