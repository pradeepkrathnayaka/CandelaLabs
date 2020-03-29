import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,fromEvent, of, from } from "rxjs";
import { map,tap, mapTo, catchError } from 'rxjs/operators';


export class User{
    constructor(public status:string,) {}  
  }

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    apiURL = environment.apiURL;
    
    private loggedUser:string;
    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';    

    constructor(private httpClient:HttpClient) { }

    login(user:{username:string, password:string}):Observable<boolean>{
        return this.httpClient.post<any>('config.apiUrl/login', user).pipe(
            tap(tokens=>this.doLoginUser(user.username, tokens)), 
            mapTo(true),
            catchError(error=>{
                alert(error.error);
                return of(false);
            })
        );
    }

    authenticate(username, password) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.post<User>('http://localhost:8080/authenticate',{headers}).pipe(
          map(
            data => {
             sessionStorage.setItem('username',username);
             return data;
            }
          ) 
         );
      }


      isLoggedIn() {
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
      }
    
      logOut() {
          return this.httpClient.post<any>('${config.apiUrl}/logout',{
              'refreshToken':this.getRefreshToken()}).pipe(
                   tap(()=>this.doLogoutUser()),
                   mapTo(true), 
                   catchError(err=>{
                       alert(err.error);
                       return of(false);
                   }));
        sessionStorage.removeItem('username')
      }

      getRefreshToken(){}

      doLoginUser(username:string, tokens:Tokens){
        this.loggedUser = username;
        this.storeTokens(tokens);
      }

      doLogoutUser(){
          this.loggedUser = null;
          this.removeTokens();
      }

      refreshToken(){
          return this.httpClient.post<any>('${config.apiUrl}/refresh', {
            'refreshToken':this.getRefreshToken()}).pipe(tap((tokens:Tokens)=>{
                this.storeTokens(tokens.twt);
            }))
          })
      }

      getJwtToken(){}

      removeTokens(){}

      storeTokens(tokens:Tokens){}

  }