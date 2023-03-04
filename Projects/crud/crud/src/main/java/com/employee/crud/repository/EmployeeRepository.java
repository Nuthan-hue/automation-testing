package com.employee.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.crud.entites.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
}
