package com.candelalabs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.candelalabs.exception.EmployeeNotFoundException;
import com.candelalabs.model.Employee;
import com.candelalabs.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository repo;

	@Override
	public List<Employee> getAllEmployee() {
		List<Employee> empList = repo.findAll();
		return empList;
	}

	@Override
	public Employee saveOrUpdateEmployee(Employee newEmployee) throws EmployeeNotFoundException{
		Optional<Employee> emp = repo.findById(newEmployee.getId());
		if (emp.isPresent()) {
			Employee newEntity = emp.get();
			newEntity.setEmail(newEmployee.getEmail());
			newEntity.setFirstName(newEmployee.getFirstName());
			newEntity.setLastName(newEmployee.getLastName());
			newEntity = repo.save(newEntity);
			return newEntity;
		} else {
			newEmployee = repo.save(newEmployee);
			return newEmployee;
		}
	}

	@Override
	public Employee findEmployeeById(Long id) throws EmployeeNotFoundException {
		Optional<Employee> employee = repo.findById(id);
		if (employee.isPresent()) {
			return employee.get();
		} else {
			throw new EmployeeNotFoundException("No employee record exist for given id");
		}
	}

	public void deleteEmployeeById(Long id) throws EmployeeNotFoundException {
		Optional<Employee> emp = repo.findById(id);
		if (emp.isPresent()) {
			repo.deleteById(id);
		} else {
			throw new EmployeeNotFoundException("No employee record exist for given id");
		}
	}

}
