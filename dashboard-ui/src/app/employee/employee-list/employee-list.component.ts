import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Observable<Employee[]>;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployeesList();
  }

  deleteEmployee(id: number): void {
    this._employeeService.deleteEmployeeById(id);
  };

  editEmployee(id: number): void {
    console.log("edit" + id);
    this._employeeService.deleteEmployeeById(id);
  };

}
