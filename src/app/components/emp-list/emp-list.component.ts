import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  
  employees : Employee[]
  constructor(private service: ManagementServiceService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfEmployees()
  
  }

  listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data)
    this.employees=data
    })
  }

  addEmployee(){
    this.route.navigateByUrl("/employeeForm");
  }


}
