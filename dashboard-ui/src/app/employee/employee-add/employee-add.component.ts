import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/service/employee.service';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit, OnDestroy {

  @Input() id:number;
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;

  user: IEmployee = new IEmployee(1,"","","");

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  save(): void {
    this._employeeService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });
  };

  cancel():void{
    
  }

  ngOnDestroy(){

  }

}
