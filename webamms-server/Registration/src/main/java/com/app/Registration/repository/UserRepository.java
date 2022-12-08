package com.app.Registration.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.User;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Integer> {

}
