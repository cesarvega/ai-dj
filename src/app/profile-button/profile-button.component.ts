import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiStore } from '@app/store/ai.store';
@Component({
  selector: 'app-profile-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
})
export class ProfileButtonComponent {
  readonly aiStore = inject(AiStore);


handleLogout() {
    this.aiStore.logoutUser();
  }
}
