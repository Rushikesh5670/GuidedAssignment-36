import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments : Department[]
  constructor(private service: ManagementServiceService,private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfDepartments()
  }

  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data)
    this.departments=data
    })
  }

  addDepartment(){
    this.route.navigateByUrl("/ departmentForm");
  }

}
