package com.anudipproject.EmpManagement.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eid;

    private String firstName;
    
    private String lastName;
    
    private String email;
    
    private String designation;
    
    private double salary;
    
    private String phoneNumber;
    
    private String address;
   

    @ManyToOne
    @JoinColumn(name = "deptId")
    private Department department;


    public Employee() {
    	
    }


	public Employee(Long eid, String firstName, String lastName, String email, String designation, double salary,
			String phoneNumber, String address, Department department) {
		super();
		this.eid = eid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.designation = designation;
		this.salary = salary;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.department = department;
	}


	public Long getEid() {
		return eid;
	}


	public void setEid(Long eid) {
		this.eid = eid;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public double getSalary() {
		return salary;
	}


	public void setSalary(double salary) {
		this.salary = salary;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}


	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", designation=" + designation + ", salary=" + salary + ", phoneNumber=" + phoneNumber + ", address="
				+ address + ", department=" + department.getDeptName()+ "]";
	}
    
    
	
}