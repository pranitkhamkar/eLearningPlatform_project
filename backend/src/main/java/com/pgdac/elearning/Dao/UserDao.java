package com.pgdac.elearning.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pgdac.elearning.Entity.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByEmail(String email);
	User findById(int id);
}
