import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-iframe-sound-cloud',
  standalone: true,
  imports: [],
  templateUrl: './iframe-sound-cloud.component.html',
  styleUrl: './iframe-sound-cloud.component.scss'
})
export class IframeSoundCloudComponent {
  paymentUrl: string = environment.paymentUrl;

  buyNowButton(): void {
    window.open(this.paymentUrl, '_blank');
  }

}
