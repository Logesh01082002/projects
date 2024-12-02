package com.anudipproject.EmpManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anudipproject.EmpManagement.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
