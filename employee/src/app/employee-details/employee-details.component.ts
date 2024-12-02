import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Department } from '../department';
import { Departmentservice } from '../departmentservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  eid!: number;
  employee!: Employee;
  deptId!: number;
  department!: Department;

  constructor(
    private employeeService: EmployeeserviceService,
    private departmentService: Departmentservice,
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(): void {
    this.eid = this.route.snapshot.params['eid'];

    this.employeeService.getEmployeeById(this.eid).subscribe(employeeData => {
      this.employee = employeeData;

      this.deptId = this.employee.department.deptId;

      this.departmentService.getDepartmentById(this.employee.department.deptId).subscribe(departmentData => {
        this.department = departmentData;
     
      });
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
