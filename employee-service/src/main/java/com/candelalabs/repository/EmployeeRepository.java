package com.candelalabs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.candelalabs.domain.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
