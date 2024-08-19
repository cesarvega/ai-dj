import { Component , HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-buttons-sales',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './buttons-sales.component.html',
  styleUrl: './buttons-sales.component.scss'
})
export class ButtonsSalesComponent {
  isDonateMenuOpen = false;
  isConfirmationModalOpen = false;
  donationAmount = 0;


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
    // Lógica para confirmar la donación
    alert('Donación confirmada');
    this.closeConfirmationModal();
    this.isDonateMenuOpen = false; // Cerrar el menú desplegable después de la confirmación
  }
 
}
