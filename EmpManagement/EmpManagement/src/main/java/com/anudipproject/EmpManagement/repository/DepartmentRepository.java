package com.anudipproject.EmpManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anudipproject.EmpManagement.entities.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
}
