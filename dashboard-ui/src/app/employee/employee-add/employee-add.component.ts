import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit, OnDestroy {

  model: any = {};
  @Input() id:number;
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;

  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  save(): void {
    this._employeeService.addEmployee(this.employee)
        .subscribe( data => {
          alert("Employee created successfully.");
        });
  };

  cancel():void{    
  }

  ngOnDestroy(){
  }

}
