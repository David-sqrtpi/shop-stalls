package application.Repository;

import application.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);

    User findByEmail(String username);

    List<User> findByCompanyId(long company);
}
