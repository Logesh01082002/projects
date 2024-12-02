import { Employee } from "./employee";

export class Department {
    deptId!:number;
    deptName!:string;
    manager!:string;
    description!:string;
    employee!: Employee;
}
