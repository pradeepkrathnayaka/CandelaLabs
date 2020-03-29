import { Component, OnInit } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployeeById(id:number);
  }

  private setLoadingSpinner(observer:Observable<any>){
  }

}
