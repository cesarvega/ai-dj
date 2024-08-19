import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QrCodePopupComponentComponent } from '@app/qr-code-popup-component/qr-code-popup-component.component';

@Component({
  selector: 'app-link-selector',
  standalone: true,
  imports: [ MatFormFieldModule,CommonModule ,QrCodePopupComponentComponent,
    MatSelectModule],
  templateUrl: './link-selector.component.html',
  styleUrl: './link-selector.component.scss'
})
export class LinkSelectorComponent {
  names: { name: string, url: string }[] = [
    { name: 'IG', url: 'https://www.instagram.com/cesarvegamiami?igsh=MTA5bDNvZHoxcHF2cg%3D%3D&utm_source=qr' },
    { name: 'WHAT', url: 'https://wa.me/3053220070' },
    // { name: 'Charlie', url: 'https://example.com/charlie' },
    // { name: 'Diana', url: 'https://example.com/diana' },
    // { name: 'Edward', url: 'https://example.com/edward' },
    // { name: 'Fiona', url: 'https://example.com/fiona' },
    // { name: 'George', url: 'https://example.com/george' },
    // { name: 'Hannah', url: 'https://example.com/hannah' },
    // { name: 'Ivan', url: 'https://example.com/ivan' },
    // { name: 'Julia', url: 'https://example.com/julia' }
  ];
  
  selectedName: string | undefined;
  websiteUrl: string = '';

  // Function that triggers when an option is selected
  onNameSelected(name: string) {
    this.selectedName = name;
    console.log(`Selected name: ${name}`);
    this.showQrCode = !this.showQrCode;
    this.websiteUrl = name;

    // Add any additional logic to handle after name selection here
  }

  showQrCode: boolean = false;
  // on environment.ts websiteUrl: 'https://raw-sample.web.app/',
  closeQrCodePopup() {
   this.showQrCode = !this.showQrCode;
 }

 onQrCodeClose() {
   this.showQrCode = false;
 }
}
