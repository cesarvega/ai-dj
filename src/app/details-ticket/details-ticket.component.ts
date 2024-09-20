import { Component, inject, OnInit } from '@angular/core';
import { AiStore } from '@app/store/ai.store';
import { Ticket } from '@app/models/ticket';
@Component({
  selector: 'app-details-ticket',
  standalone: true,
  imports: [],
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.scss'] // Corregido de styleUrl a styleUrls
})
export class DetailsTicketComponent implements OnInit {
  readonly aiStore = inject(AiStore);
  ticketDetails: Ticket | null | undefined;
 

  constructor() {}

  ngOnInit(): void {
    this.ticketDetails = this.aiStore.ticketDetails();
  }

}
