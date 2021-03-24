package application.Repository;

import application.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface RepositoryUser extends CrudRepository<User, Integer> {

    User findByEmail(String username);
}
