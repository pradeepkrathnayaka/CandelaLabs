import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  username = 'admin'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.logOut();
  }

  login(){
    this.loading = false;
    this.authService.login(this.model.username, this.model.password)
  }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
