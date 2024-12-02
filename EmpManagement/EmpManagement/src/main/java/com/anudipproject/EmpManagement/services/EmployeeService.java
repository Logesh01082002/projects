package com.anudipproject.EmpManagement.services;

import java.util.List;

import com.anudipproject.EmpManagement.entities.Employee;

public interface EmployeeService {
	
    List<Employee> getAllEmployees();
    Employee getEmployeeById(Long eid);
    Employee saveEmployee(Employee employee);
    Employee updateEmployee(Employee employee,long eid);
    void deleteEmployee(Long eid);
}