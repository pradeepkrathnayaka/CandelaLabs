package com.candelalabs.service;

import com.candelalabs.domain.User;

public interface UserService {
	void create(User user);
	void delete(String username);
	void findById(String username);
}
