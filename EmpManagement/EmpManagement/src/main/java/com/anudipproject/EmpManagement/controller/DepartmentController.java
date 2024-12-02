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
import org.springframework.web.bind.annotation.RestController;

import com.anudipproject.EmpManagement.entities.Department;
import com.anudipproject.EmpManagement.exception.ResourceNotFoundException;
import com.anudipproject.EmpManagement.services.DepartmentService;

@RestController
@RequestMapping("/api/departments")

@CrossOrigin("http://localhost:4200")

public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping
    public ResponseEntity<Department> saveDepartment(@RequestBody Department department){
		return new ResponseEntity<Department>(departmentService.saveDepartment(department), HttpStatus.CREATED);
	}
    
    
    @GetMapping
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("{did}")
        public ResponseEntity<Department> getDepartmentById(@PathVariable("did") long did){
    	
    	try {
    		Department depObject = departmentService.getDepartmentById(did);
			return new ResponseEntity<Department>(depObject, HttpStatus.OK);
    	}
    	catch (ResourceNotFoundException e) {
			return new ResponseEntity<Department>( HttpStatus.BAD_REQUEST);
		}
		
	}
 

    @PutMapping("{did}")
    public ResponseEntity<String> updateDepartment(@PathVariable("did") long did
			  ,@RequestBody Department department){
       try {
     Department updatedDepartment = departmentService.updateDepartment(department, did);
     return new ResponseEntity<String>(updatedDepartment.toString(), HttpStatus.OK);
     } 
      catch (ResourceNotFoundException e) {
    return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
     }

    
    @DeleteMapping("{did}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("did") long did){
		try {
		// delete department from DB
			departmentService.deleteDepartment(did);
		return new ResponseEntity<String>("Department deleted successfully!.", HttpStatus.OK);
	       } 
		catch (ResourceNotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
                      }
               }
           }
