package com.anudipproject.EmpManagement.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.anudipproject.EmpManagement.entities.DeleteResponse;
import com.anudipproject.EmpManagement.entities.Department;
import com.anudipproject.EmpManagement.entities.Employee;
import com.anudipproject.EmpManagement.exception.ResourceNotFoundException;
import com.anudipproject.EmpManagement.services.DepartmentService;
import com.anudipproject.EmpManagement.services.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/employees")
public class EmployeeController {

    private  EmployeeService employeeService;
    private  DepartmentService departmentService;
 
    public EmployeeController(EmployeeService employeeService,DepartmentService departmentService) {
    	super();
        this.employeeService = employeeService;
        this.departmentService = departmentService;
    }

  
    @PostMapping("{did}")
    public ResponseEntity<Employee> saveEmployee(@PathVariable("did") Long did, @RequestBody Employee employee) {
        // Retrieve the department by ID
        Department department = departmentService.getDepartmentById(did);
        
        // Set the department for the employee
        employee.setDepartment(department);
        
        // Save the employee
        Employee savedEmployee = employeeService.saveEmployee(employee);
        
        return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
    }

    
    
    @GetMapping("/getAllEmp")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/get/{eid}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("eid") long eid){
    	
    	try {
    		Employee empObject = employeeService.getEmployeeById(eid);
			return new ResponseEntity<Employee>(empObject, HttpStatus.OK);
    	}
    	catch (ResourceNotFoundException e) {
			return new ResponseEntity<Employee>( HttpStatus.BAD_REQUEST);
		}
		
	}

    @PutMapping("/update/{eid}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("eid") long eid
												  ,@RequestBody Employee employee){
    	try {
    	Employee updatedEmployee = employeeService.updateEmployee(employee, eid);
		return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
	} 
    	catch (ResourceNotFoundException e) {
			return new ResponseEntity<Employee>(HttpStatus.BAD_REQUEST);
		}
    }

    
   /* @DeleteMapping("/delete/{eid}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("eid") long eid){
		try {
		// delete employee from DB
		employeeService.deleteEmployee(eid);
		
		return new ResponseEntity<String>("Employee deleted successfully!.", HttpStatus.OK);
	    } 
		catch (ResourceNotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
         }
    }
   */
    
    @DeleteMapping("/delete/{eid}")
  
    public DeleteResponse deleteEmployee(@PathVariable("eid") long eid){
      try {
        // delete employee from DB
        employeeService.deleteEmployee(eid);

        // create and return a DeleteResponse object
        return new DeleteResponse(true, "Employee deleted successfully!", null);
      } 
      catch (ResourceNotFoundException e) {
        // create and return a DeleteResponse object with error message
        return new DeleteResponse(false, e.getMessage(), null);
      }
    }
    
    
}
