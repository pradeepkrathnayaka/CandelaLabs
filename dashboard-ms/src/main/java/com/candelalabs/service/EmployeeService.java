package com.candelalabs.service;

import java.util.List;

import com.candelalabs.domain.Employee;

public interface EmployeeService {

	List<Employee> getAllEmployee();

	Employee saveOrUpdateEmployee(Employee newEmployee);

	Employee findEmployeeById(Long id);

}
