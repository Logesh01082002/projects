import { Department } from "./department";

export class Employee {
    eid!:number;
    firstName!:String;
    lastName!:String;
    email!:String;
    salary!:number;
    designation!:string;
    phoneNumber!:number;
    address!:string;
    department!:Department;
     deptId!: number 
}
