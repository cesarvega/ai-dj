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
export class SubscriptionService {
  base: string;
  
  constructor(private http: HttpClient) { 
    this.base = environment.subscriptionUrl;
  }

  subscribeUser(payload: any){
    return this.http.post(this.base,payload,httpOptions)
  }
}
