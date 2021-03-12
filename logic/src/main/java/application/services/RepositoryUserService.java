package application.services;

import application.models.User;
import org.springframework.data.repository.CrudRepository;

public interface RepositoryUserService extends CrudRepository<User, Integer> {

}
