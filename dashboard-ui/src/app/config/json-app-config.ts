import { AppConfig } from './app-config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class JsonAppConfig extends AppConfig{

    constructor(private httpClient:HttpClient){
        super();
    }

    load(){
        return this.httpClient.get<AppConfig>('../app.config.json')
        .toPromise()
        .then(data=>{
            this.title = data.title;
            this.baseUrl=data.baseUrl;
        }).catch(()=>{
            console.error('Cannot load configuration!');
        });
    }

}