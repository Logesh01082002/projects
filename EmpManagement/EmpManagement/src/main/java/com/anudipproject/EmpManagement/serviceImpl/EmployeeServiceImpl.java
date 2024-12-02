package com.anudipproject.EmpManagement.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.anudipproject.EmpManagement.entities.Employee;
import com.anudipproject.EmpManagement.exception.ResourceNotFoundException;
import com.anudipproject.EmpManagement.repository.EmployeeRepository;
import com.anudipproject.EmpManagement.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    
    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    
    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long eid) {
    	   return employeeRepository.findById(eid)
                .orElseThrow(() -> new ResourceNotFoundException("Employee","eid",eid));
    }
    

    @Override
    public Employee updateEmployee(Employee employee,long eid) {
        Employee existingEmployee = employeeRepository.findById(eid)
                .orElseThrow(() -> new ResourceNotFoundException("Employee","eid",eid));
        
        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setDesignation(employee.getDesignation());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setSalary(employee.getSalary());
        existingEmployee.setAddress(employee.getAddress());
        existingEmployee.setPhoneNumber(employee.getPhoneNumber()); 
      

        return employeeRepository.save(existingEmployee);
    }
    
	@Override
	public void deleteEmployee(Long eid) {
		
		// check whether a employee exist in a DB or not
		employeeRepository.findById(eid).orElseThrow( 
				() -> new ResourceNotFoundException("Employee", "eid", eid));
		employeeRepository.deleteById(eid);
	}
    }

