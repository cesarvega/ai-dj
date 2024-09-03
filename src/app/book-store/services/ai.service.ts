import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AiService {
  base: string;
  private subscribe_user: string
  private login_user: string; 

  constructor(private http: HttpClient) { 
    this.base = environment.baseUrl;
    this.subscribe_user = 'kp6dhkwmr6qcl53o1fsqjspq6g5eytog';
    this.login_user = 'psba9rxb5vgjff5dg8oufle6ajdofezw';
  }

  subscribeUser(payload: any){
    return this.http.post(this.base+this.subscribe_user,payload,httpOptions)
  }

  checkCredentials(body:{username: string, password: string}){
    return this.http.post(this.base+this.login_user, body, httpOptions);
  }
}
