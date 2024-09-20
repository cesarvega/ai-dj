import { Injectable,inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '@app/models/ticket';
import { environment } from '@environments/environment';
import { AiStore } from '@app/store/ai.store';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer your-token-here',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ValetService {
  readonly aiStore = inject(AiStore);
  private baseUrl = environment.apiUrl;
  private get_all_locations: string
  private create_session: string

  constructor(private http: HttpClient) {
    this.get_all_locations = '/locations'
    this.create_session = '/sessions'
  }

  // Locations CRUD Operations

  // GET /locations - Retrieve all locations
  getAllLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.get_all_locations}`, httpOptions);
  }

  createSession(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.create_session}`,body, httpOptions);
  }

  // getLocations(): void {
  //   this.http.get('assets/db/omni-locations.json').pipe(
  //     catchError(error => {
  //       console.error('Error fetching locations:', error);
  //       return of(null); // Return null or handle the error as needed
  //     })
  //   ).subscribe({
  //     next: (data) => {
  //       // this.aiStore.omniLocations.U;
  //       console.log('Locations data updated in aiStore.');
  //     },
  //     error: (error) => {
  //       console.error('Error in subscription:', error);
  //     },
  //     complete: () => {
  //       console.log('getLocations() completed.');
  //     },
  //   });
  // }


  // POST /locations - Create a new location
  postOneLocation(locationData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/locations`, locationData);
  }

  // PUT /locations/:id - Update a specific location
  updateOneLocation(id: string, locationData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/locations/${id}`, locationData);
  }

  // Users CRUD Operations

  // GET /users/:id - Retrieve a user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  // POST /users - Create a new user
  postUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, userData);
  }

  // PUT /users/:id - Update a specific user
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, userData);
  }

    // Tickets CRUD Operations

  // GET /tickets - Retrieve all tickets
  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`);
  }

   // GET /tickets/:id - Retrieve a ticket by ID
   getTicketById(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/tickets/${id}`);
  }

  // POST /tickets - Create a new ticket
  createTicket(ticketData: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}/tickets`, ticketData);
  }

  // PUT /tickets/:id - Update an existing ticket
  updateTicket(id: string, ticketData: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/tickets/${id}`, ticketData);
  }

  // DELETE /tickets/:id - Delete a ticket
  deleteTicket(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tickets/${id}`);
  }

}
