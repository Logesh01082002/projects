import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

employee:Employee=new Employee();
  eid!: number;

  constructor(private employeeService:EmployeeserviceService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.eid=this.activatedRoute.snapshot.params['eid'];
    this.employeeService.getEmployeeById(this.eid).subscribe(data => {
      this.employee=data;
    },
    error=>console.log(error));
  }
  
  updateEmployee(){
    this.employeeService.updateEmployeeById(this.eid,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    }, error=>console.log(error)
    );
  }
  goToEmployeeList(){
    this.router.navigate(['employees'])
  }
}
