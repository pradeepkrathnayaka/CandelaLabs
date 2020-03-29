import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,fromEvent, of, from } from "rxjs";
import { tap, map, catchError } from 'rxjs/operators';
import { Employee } from '../employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "assets/data/employees.json";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  
  httpOptions = {};

  constructor(private httpClient:HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this._url)
      .pipe(
        tap(resp=>this.log('Employees list = ${JSON.stringify(resp)}')),
        catchError(error=>of([]))
      );
  }

  public getEmployees(): Observable<Employee[]>  {
    console.log("Get employees list!");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees')
    .pipe(
      tap(resp=>this.log('Employees list = ${JSON.stringify(resp)}')),
      catchError(error=>of([]))
    );
  }

  public getEmployeeById(id:number) : Observable<Employee>{
    return this.httpClient.get<Employee>("http://localhost:8080/employees" + "/"+ id)
    .pipe(
      tap(resp=>this.log('Employees  = ${JSON.stringify(resp)}')),
      catchError(error=>of(new Employee()))
    );
  }

  public deleteEmployeeById(id:number): Observable<Employee> {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ id)
    .pipe(
      tap(_=>this.log('Deleted Employee = ${id}')),
      catchError(error=>of(null))
    );
  }

  public addEmployee(newEmployee:Employee): Observable<Employee> {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", newEmployee)
    .pipe(
      tap((resp:Employee)=>this.log('Added New Employee = ${JSON.stringify(resp)}')),
      catchError(error=>of(new Employee()))
    );
  }

  public updateEmployee(employee:Employee) : Observable<any> {
    return this.httpClient.put("http://localhost:8080/employees", employee, this.httpOptions ).pipe(
      tap(_=>this.log("updated here id=${employee.id}")), 
      catchError(this.handleError<any>('update employee'))
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