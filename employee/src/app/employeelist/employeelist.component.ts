import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
    employees!:Employee[] ;
    isDelete=false;
    message!:String;

  constructor(private employeeService:EmployeeserviceService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees()
  {
    this.employeeService.getAllEmployeeList().subscribe(data=>
      {
        this.employees=data;
      })
  }
  employeeDetails(eid:number) {
    this.router.navigate(['employee-details',eid]);
  }
  deleteEmployee(eid:number)
  {
    if(confirm('Are you sure to delete Record?'))
    this.employeeService.deleteEmployeeById(eid).subscribe(data=>{
      console.log(data);
      alert('Record deleted successfully!')
      
   this.getEmployees();
   this.reloadPage();
    });
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]) 
  });
}


    updateEmployee(eid:number)
  {
   this.router.navigate(['update-employee',eid]);
  } 

 

}