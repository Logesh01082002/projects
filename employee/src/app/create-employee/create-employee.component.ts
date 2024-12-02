import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  department: Department = new Department();

  constructor(private employeeService: EmployeeserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employee.deptId = this.department.deptId; 

    this.employeeService.createEmployee(this.employee, this.department.deptId).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee();
  }
}
