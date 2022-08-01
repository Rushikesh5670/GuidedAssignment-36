import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { Router,RouterModule,Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { FormsModule } from '@angular/forms';
import { DeptFormComponent } from './components/dept-form/dept-form.component';

const route : Routes = [
  {path : '',component : WelcomeComponent},
  {path : 'employees',component : EmpListComponent},
  {path : 'employeeForm',component : EmpFormComponent},
  {path : 'departments',component : DeptListComponent},
  {path : 'departmentForm',component : DeptFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent,
    EmpFormComponent,
    DeptFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
