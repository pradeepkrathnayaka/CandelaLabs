import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthenticationService } from './auth/service/auth.service';
import { EmployeeService } from './employee/service/employee.service';
import { JsonAppConfig } from './config/json-app-config';
import { AppConfig } from './config/app-config';
import { FormsModule } from '@angular/forms';


export function initializerFn(jsonAppConfig:JsonAppConfig){
  return ()=>{
    return jsonAppConfig.load();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AuthenticationService,
    EmployeeService,
    {
      provide:AppConfig,
      deps:[HttpClient],
      useExisting:JsonAppConfig
    },
    {
      provide:APP_INITIALIZER,
      multi:true,
      deps:[JsonAppConfig],
      useFactory:initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }