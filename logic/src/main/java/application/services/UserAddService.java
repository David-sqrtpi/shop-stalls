package application.services;

import application.models.User;
import org.springframework.data.repository.CrudRepository;

public abstract class UserAddService implements CrudRepository<User, Integer> {
    @Override
    public <S extends User> S save(S entity) {
        return null;
    }
}
