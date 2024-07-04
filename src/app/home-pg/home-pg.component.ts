import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RawSpinnerComponent } from '../raw-spinner/raw-spinner.component';
import { WaveComponentComponent } from '../wave-component/wave-component.component';
import { QrCodePopupComponentComponent } from '../qr-code-popup-component/qr-code-popup-component.component';
import { environment } from '../../../environments/environment';
import { IframeSoundCloudComponent } from '../iframe-sound-cloud/iframe-sound-cloud.component';

@Component({
  selector: 'app-home-pg',
  standalone: true,
  imports: [RawSpinnerComponent, WaveComponentComponent, CommonModule, QrCodePopupComponentComponent, IframeSoundCloudComponent],
  templateUrl: './home-pg.component.html',
  styleUrl: './home-pg.component.scss',
})
export class HomePgComponent implements AfterViewInit {
  img: any;
  showQrCode: boolean = false;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  websiteUrl: string = environment.websiteUrl;
  corpWebsiteUrl: string = environment.corpWebsiteUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getImages();
  }

  ngAfterViewInit() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.play().catch(error => {
        console.error('Error attempting to play', error);
      });
    }
  }

  getImages(): void {
    this.http.get('assets/db/images.json').subscribe((res) => {
      this.img = res;
    });
  }

  closeQrCodePopup() {
    this.showQrCode = !this.showQrCode;
  }

  onQrCodeClose() {
    this.showQrCode = false;
  }

  openCorpwebsite() {
    window.open(this.corpWebsiteUrl, '_blank');
  }

}
