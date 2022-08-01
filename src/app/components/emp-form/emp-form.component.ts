import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';
import { EmpListComponent } from '../emp-list/emp-list.component';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  
  employee : Employee = new Employee(0,"","",new Date(0,0,0),0,0,0,0,);
  constructor(private service: ManagementServiceService, private route:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.saveEmployee(this.employee).subscribe(data=>{
      console.log(data)
    this.employee=data;
    this.route.navigateByUrl("/employees");
    })
  }
 
}
