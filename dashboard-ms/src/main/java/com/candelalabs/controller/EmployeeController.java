package com.candelalabs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.candelalabs.domain.Employee;
import com.candelalabs.exception.EmployeeNotFoundException;
import com.candelalabs.service.EmployeeService;

@RestController
@Validated
@RequestMapping("/employees")
public class EmployeeController {
	
	@Autowired
    private EmployeeService employeeService;

	@GetMapping("/")
	ResponseEntity<List<Employee>> getAllEmployee() {
		List<Employee> allEmployees = employeeService.getAllEmployee();
		return new ResponseEntity<List<Employee>>(allEmployees, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping(value = "/", consumes = "application/json", produces = "application/json")
    ResponseEntity<Employee> addEmployee(@RequestBody Employee newEmployee) throws EmployeeNotFoundException{
        Employee empUpdated = employeeService.saveOrUpdateEmployee(newEmployee);
        return new ResponseEntity<Employee>(empUpdated, new HttpHeaders(), HttpStatus.CREATED);
    }

	@GetMapping("/{id}")
	ResponseEntity<Employee> findEmployeeById(@PathVariable Long id) throws EmployeeNotFoundException{
		Employee emp = employeeService.findEmployeeById(id);
		return new ResponseEntity<Employee>(emp, new HttpHeaders(), HttpStatus.OK);
	}

}
