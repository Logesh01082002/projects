package com.anudipproject.EmpManagement.services;

import java.util.List;

import com.anudipproject.EmpManagement.entities.Department;

public interface DepartmentService {
	
	Department saveDepartment(Department department);
    List<Department> getAllDepartments();
    Department getDepartmentById(Long did);
    Department updateDepartment(Department department, long did);
    void deleteDepartment(Long did);
}