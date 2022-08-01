import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl = "http://localhost:8080/api/emp"
  depturl = "http://localhost:8080/api/dept"

  constructor(private httpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    
    console.log(this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees)))

    return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees))
  }

  getAllDepartments() : Observable<Department[]>{
    
    console.log(this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments)))

    return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments))
  }

  saveEmployee(employee : Employee) : Observable<Employee>{
    console.log(employee)

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
        return this.httpClient.post<Employee>(this.empurl,employee,httpOptions);
  }

  saveDepartment(department : Department) : Observable<Department>{
    console.log(department)

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
        return this.httpClient.post<Department>(this.depturl,department,httpOptions);
  }
}

interface getEmployeeResponse{
  _embedded :{
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded :{
    departments : Department[]
  }
}
