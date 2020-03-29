import { CanActivate, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }
    constructor(private authService:AuthenticationService, private router:Router){}    
}