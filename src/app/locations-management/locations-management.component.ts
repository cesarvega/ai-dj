import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives like ngFor, ngIf
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Ticket } from '@app/models/ticket';
import { ValetService } from '@app/services/valet.service';
import { AiStore } from '@app/store/ai.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-locations-management',
  standalone: true,
  imports: [],
  templateUrl: './locations-management.component.html',
  styleUrl: './locations-management.component.scss'
})
export class LocationsManagementComponent {
  readonly valetService = inject(ValetService);
  ngOnInit(): void {
    this.valetService.getAllLocations().subscribe(
      {
        next(reponse) {
            console.log(reponse);
        },
        error(err) {
            console.error('something wrong occurred: ' + err);
        },
        complete() {
            console.log('done');
        },
      }
    )
  }
}
