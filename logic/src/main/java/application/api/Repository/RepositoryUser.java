package application.api.Repository;

import application.models.User;
import org.springframework.data.repository.CrudRepository;

public interface RepositoryUser extends CrudRepository<User, Integer> {

    User findByEmail(String username);
}
