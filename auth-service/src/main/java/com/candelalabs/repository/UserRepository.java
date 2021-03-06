package com.candelalabs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.candelalabs.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, String>{

}
