import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = new HttpHeaders({
  'Accept': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private webhookUrl = 'https://hook.eu2.make.com/psba9rxb5vgjff5dg8oufle6ajdofezw';

  constructor(private http: HttpClient) { }

  checkCredentials(username: string, password: string): Observable<any> {
    const payload = {
      "username": username,
      "password": password // Add the value for the "password" property
    };
    return this.http.post(this.webhookUrl, payload, {headers});
  }
}