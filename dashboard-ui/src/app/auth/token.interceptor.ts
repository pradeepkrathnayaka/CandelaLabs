import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './service/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor{

    constructor(private authService:AuthenticationService){}

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
        if(this.authService.getJwtToken()){
            req = this.addToken(req, this.authService.getJwtToken())
        }
    }

    addToken(req: HttpRequest<any>, token:string){
    }

    private handle401Error(req: HttpRequest<any>, next:HttpHandler){        
    }
    
}