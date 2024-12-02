package com.anudipproject.EmpManagement.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.anudipproject.EmpManagement.entities.Department;
import com.anudipproject.EmpManagement.exception.ResourceNotFoundException;
import com.anudipproject.EmpManagement.repository.DepartmentRepository;
import com.anudipproject.EmpManagement.services.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
 

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartmentById(Long did) {
        return departmentRepository.findById(did)
                .orElseThrow(() -> new ResourceNotFoundException("Department","did",did));
    }

   
    @Override
    public  Department updateDepartment(Department department, long did) {
        Department existingDepartment = departmentRepository.findById(did)
                .orElseThrow(() -> new ResourceNotFoundException("Department","did",did));

        existingDepartment.setDeptName(department.getDeptName());
        existingDepartment.setManager(department.getManager());
        existingDepartment.setDescription(department.getDescription());

        return departmentRepository.save(existingDepartment);
    }
    
	@Override
	public void deleteDepartment(Long did) {
		
		// check whether a employee exist in a DB or not
		departmentRepository.findById(did).orElseThrow( 
				() -> new ResourceNotFoundException("Department", "did", did));
		departmentRepository.deleteById(did);
	}

}
