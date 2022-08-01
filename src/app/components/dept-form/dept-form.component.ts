import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  department : Department = new Department(0,"","");
  constructor(private service: ManagementServiceService, private route:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.saveDepartment(this.department).subscribe(data=>{
      console.log(data)
    this.department=data;
    this.route.navigateByUrl("/departments");
    })
  }

}
