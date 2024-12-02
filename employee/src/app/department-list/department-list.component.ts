import { Component, OnInit } from '@angular/core';
import { Departmentservice } from '../departmentservice.service';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[] | undefined;
   isDelete=false;
  message!:String;
  
  constructor(private departmentservice : Departmentservice,private router:Router,
    private route:ActivatedRoute) { }
    
      deptId!: number
     department!:Department
    ngOnInit(): void {
      this.getAlldepartment();
    }
    private getAlldepartment()
    {
      this.departmentservice.getAllDepartmentList().subscribe(data=>
        {
          this.departments=data;
          
        })
        
    }
    
    reloadPage() {
      let currenturl=this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
      this.router.navigate([currenturl])
      )};
 
      departmentDetail(deptId:number) {
        this.router.navigate(['department-details',deptId]);
      }
      
}