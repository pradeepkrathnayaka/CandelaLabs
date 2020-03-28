import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'addemployee', component: EmployeeAddComponent },
  { path: 'viewemployee', component: EmployeeDetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
