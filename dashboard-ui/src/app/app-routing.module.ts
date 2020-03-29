import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  { path: 'home',pathMatch:'full',redirectTo:'/login'},
  { path: 'addemployee', component: EmployeeAddComponent },
  { path: 'viewemployee', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
