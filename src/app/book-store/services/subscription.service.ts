import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  base: string;
  
  constructor(private http: HttpClient) { 
    this.base = environment.subscriptionUrl;
  }

  subscribeUser(payload: any){
    return this.http.post(this.base,payload)
  }
}
