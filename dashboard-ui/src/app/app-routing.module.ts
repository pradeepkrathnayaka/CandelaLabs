import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { LoginComponent } from './auth/login';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  { path: 'home', pathMatch:'full',redirectTo:'/login'},
  { path: 'login', component: LoginComponent },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/view', component: EmployeeDetailComponent },
  { path: 'employee/add', component: EmployeeAddComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
