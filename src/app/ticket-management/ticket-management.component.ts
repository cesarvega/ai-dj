import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives like ngFor, ngIf
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Ticket } from '@app/models/ticket';
import { ValetService } from '@app/services/valet.service';
import { AiStore } from '@app/store/ai.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ticket-management',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {
  readonly aiStore = inject(AiStore);
  // locations = computed(() => this.aiStore.omniLocations());
  locations: any;
  tickets: Ticket[] = [];

  constructor(private valetService: ValetService,private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllTickets();
    this.getImages();
  }

  getImages(): void {
    this.http.get('assets/db/omni-locations.json').subscribe((res:any) => {
      this.locations = res.data;
    });
  }

  loadAllTickets(): void {
    this.valetService.getAllTickets().subscribe({
      next: data => {
        this.tickets = data;
        console.log('Tickets loaded:', this.tickets);
      },
      error: error => {
        console.error('Error loading tickets:', error);
      },
      complete: () => {
        console.log('Finished loading tickets.');
      }
    });
  }
  
  viewTicket(id: string): void {
    this.valetService.getTicketById(id).subscribe({
      next: ticket => {
        console.log('Ticket details:', ticket);
        // Implement logic to display ticket details
      },
      error: error => {
        console.error('Error fetching ticket:', error);
      },
      complete: () => {
        console.log('Finished fetching ticket details.');
      }
    });
  }
  
  addTicket(): void {
    const newTicket: Ticket = {
      vehicleNumber: 'ABC123',
      driverName: 'John Doe',
      parkingSpot: 'P1',
      entryTime: new Date()
      // Add other fields as necessary
    };
  
    this.valetService.createTicket(newTicket).subscribe({
      next: ticket => {
        console.log('Ticket created:', ticket);
        this.loadAllTickets(); // Refresh the list
      },
      error: error => {
        console.error('Error creating ticket:', error);
      },
      complete: () => {
        console.log('Finished creating ticket.');
      }
    });
  }
  
  editTicket(id: string): void {
    // Uncomment this line and comment the next line if you have a Ticket interface
    // const updatedData: Ticket = {
    const updatedData: any = {
      // Provide updated ticket data
      parkingSpot: 'P2',
      exitTime: new Date()
      // Add other fields as necessary
    };
  
    this.valetService.updateTicket(id, updatedData).subscribe({
      next: ticket => {
        console.log('Ticket updated:', ticket);
        this.loadAllTickets(); // Refresh the list
      },
      error: error => {
        console.error('Error updating ticket:', error);
      },
      complete: () => {
        console.log('Finished updating ticket.');
      }
    });
  }
  
  removeTicket(id: string): void {
    this.valetService.deleteTicket(id).subscribe({
      next: () => {
        console.log('Ticket deleted');
        this.loadAllTickets(); // Refresh the list
      },
      error: error => {
        console.error('Error deleting ticket:', error);
      },
      complete: () => {
        console.log('Finished deleting ticket.');
      }
    });
  }
}
