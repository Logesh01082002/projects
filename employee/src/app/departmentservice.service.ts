import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class Departmentservice {

  private baseurl ="http://localhost:1332/api/departments";

  constructor(private httpClient:HttpClient) { }

  createDepartment(department:Department):Observable<object> {
    return this.httpClient.post(`${this.baseurl}`,department);
  }

  getAllDepartmentList():Observable<Department[] > {
    
    return this.httpClient.get<Department[]>(`${this.baseurl}`);
  }
  
  getDepartmentById(deptId:number):Observable<Department>
  {
    return this.httpClient.get<Department>(`${this.baseurl}/${deptId}`);
  }  
  updateDepartmentById(deptId:number,department:Department):Observable<object>
  {
    return this.httpClient.put(`${this.baseurl}/${deptId}`, department);

  }
  

}
