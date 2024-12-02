import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private addEmp="http://localhost:1332/api/employees";
private getAllEmp="http://localhost:1332/api/employees/getAllEmp";
private getEmpById="http://localhost:1332/api/employees/get";
private updateEmployee="http://localhost:1332/api/employees/update";
private deleteEmployee="http://localhost:1332/api/employees/delete";

  constructor(private httpClient:HttpClient) { }

  createEmployee(employee: Employee, deptId: number): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.addEmp}/${deptId}`, employee);
  }

  getAllEmployeeList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.getAllEmp}`);
  }
  getEmployeeById(eid:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.getEmpById}/${eid}`);
  }

  updateEmployeeById(eid:number,employee:Employee):Observable<Object>
  {
    return this.httpClient.put(`${this.updateEmployee}/${eid}`,employee);
  }
  deleteEmployeeById(eid:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteEmployee}/${eid}`);
  }
  
}
