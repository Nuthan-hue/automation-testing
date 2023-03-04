package com.employee.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employee.crud.entites.Employee;
import com.employee.crud.repository.EmployeeRepository;


@RestController
public class controller {
	
	@Autowired
	EmployeeRepository repository;
	@RequestMapping(value="/empa/",method=RequestMethod.GET)
	public List<Employee> getE(){
		return repository.findAll();
	}
	
	@RequestMapping(value="/empb/{id}",method=RequestMethod.GET)
	public Employee getEmployee(@PathVariable("id") int id) {
		return repository.findById((id)).get();
		
	}
	
	@RequestMapping(value="/empc/",method=RequestMethod.POST)
	public Employee createEployee(@RequestBody Employee employee) {
		return repository.save(employee);
	}
	
	@RequestMapping(value="/empd/",method=RequestMethod.PUT)
	public Employee updateEmployee(@RequestBody Employee employee) {
		return repository.save(employee);
	}
	
	@RequestMapping(value="/empe/{id}",method=RequestMethod.DELETE)
	public void deleteemployee(@PathVariable("id") int id) {
		repository.deleteById(id);
	}
	
	@RequestMapping(value="/empf/sort",method=RequestMethod.GET)
	public List<Employee> empsortt(){
		return repository.findAll(Sort.by(Sort.Direction.ASC,"id"));
	}
}
