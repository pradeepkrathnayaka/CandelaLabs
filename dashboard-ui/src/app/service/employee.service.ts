import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,fromEvent, of, from } from "rxjs";
import { tap, map } from 'rxjs/operators';
import { IEmployee } from '../employee/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "assets/data/employees.json";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  
  httpOptions = {};

  constructor(private httpClient:HttpClient) { 
  }

  getEmployeesList():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this._url);
  }

  public getEmployees():Observable<IEmployee[]>  {
    console.log("Get employees!");
    return this.httpClient.get<IEmployee[]>('http://localhost:8080/employees');
  }

  public getEmployee(employee) {
    return this.httpClient.get<IEmployee>("http://localhost:8080/employees" + "/"+ employee.id);
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<IEmployee>("http://localhost:8080/employees" + "/"+ employee.id);
  }

  public createEmployee(employee) {
    return this.httpClient.post<IEmployee>("http://localhost:8080/employees", employee);
  }

  public updateEmployee(employee:IEmployee) : Observable<any> {
    return this.httpClient.put("http://localhost:8080/employees", employee, this.httpOptions ).pipe(
      tap(_=>this.log("updated here id=${employee.id}")), catchError(this.handleError<any>('update employee'))
    );
  }

  private log(message:string){
    console.log(message)
  }

  private handleError<T>(operators = 'operation', restult?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(restult as T)
    }
  }
  
}
