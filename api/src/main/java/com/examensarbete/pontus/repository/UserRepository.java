package com.examensarbete.pontus.repository;

import com.examensarbete.pontus.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
    User findByUsername(String username);
    User getById(Long id);
}
