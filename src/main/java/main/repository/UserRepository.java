package main.repository;

import main.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("Select u from User u where u.username = :username and u.password = :password")
    User getUserByUsername(@Param("username") String username, @Param("password") String password);

}
