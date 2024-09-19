import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiStore } from '../../store/ai.store';

@Component({
  selector: 'app-buttons-sales',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './buttons-sales.component.html',
  styleUrl: './buttons-sales.component.scss'
})
export class ButtonsSalesComponent {
  readonly aiStore = inject(AiStore);
  isDonateMenuOpen: boolean;
  isConfirmationModalOpen: boolean;
  donationAmount: number;
  constructor() { 
    this.isDonateMenuOpen = false;
    this.isConfirmationModalOpen = false;
    this.donationAmount = this.aiStore.donateValue(); 

  } 


  toggleDonateMenu() {
    this.isDonateMenuOpen = !this.isDonateMenuOpen;
  }

  openConfirmationModal() {
    this.isConfirmationModalOpen = true;
  }

  closeConfirmationModal() {
    this.isConfirmationModalOpen = false;
  }
  confirmDonation() {
    this.aiStore.updateDonateValue(this.donationAmount);
    alert('Donación confirmada');
    this.closeConfirmationModal();
    this.isDonateMenuOpen = false; // Cerrar el menú desplegable después de la confirmación
  }
 
}
