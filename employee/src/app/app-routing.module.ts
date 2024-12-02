import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



const routes: Routes = [
  {path:"create-employee", component:CreateEmployeeComponent},
  {path:"employees",component:EmployeelistComponent},
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {path:"update-employee/:eid",component:UpdateEmployeeComponent},
  {path:"create-dept",component:CreateDepartmentComponent},
  {path:"departments",component:DepartmentListComponent},
  {path:"employee-details/:eid",component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
