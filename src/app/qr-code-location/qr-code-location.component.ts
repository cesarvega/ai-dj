import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QrCodePopupComponentComponent } from '@app/qr-code-popup-component/qr-code-popup-component.component';
import { environment } from '@environments/environment';
@Component({
  selector: 'app-qr-code-location',
  standalone: true,
  imports: [CommonModule,QrCodePopupComponentComponent],
  templateUrl: './qr-code-location.component.html',
  styleUrl: './qr-code-location.component.scss'
})
export class QrCodeLocationComponent {
  showQrCode: boolean = true;
  websiteUrl: string = environment.websiteUrl;
  // on environment.ts websiteUrl: 'https://raw-sample.web.app/',
  closeQrCodePopup() {
   this.showQrCode = !this.showQrCode;
 }

 onQrCodeClose() {
   this.showQrCode = false;
 }
}
