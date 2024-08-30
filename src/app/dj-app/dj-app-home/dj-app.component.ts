import { Component, ElementRef, ViewChild } from '@angular/core';
import { QrCodePopupComponentComponent } from '@app/qr-code-popup-component/qr-code-popup-component.component';

@Component({
  selector: 'grasa-x-pro',
  templateUrl: './grasa-x-pro.component.html',
  styleUrls: ['./grasa-x-pro.component.scss'],
  standalone: true,
  imports: [ QrCodePopupComponentComponent ]

})
export class GrasaXPro {
  isPlaying: boolean = false;
  @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;
  @ViewChild('timeline', { static: true }) timeline: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress: ElementRef<HTMLDivElement>;

  buyNowButton() {
    window.location.href = 'https://buy.stripe.com/00g14KdCo6bh3Sg8ww';
  }

  onMouseOverBook() {
    document.querySelector('.book-image')?.classList.add('hover');
  }

  onMouseOutBook() {
    document.querySelector('.book-image')?.classList.remove('hover');
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
  }

  updateProgress() {
    const duration = this.audioPlayer.nativeElement.duration;
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.nativeElement.style.width = `${progressPercent}%`;
  }

  setDuration() {
    this.updateProgress();
  }

  seek(event: MouseEvent) {
    const timelineWidth = this.timeline.nativeElement.clientWidth;
    const clickX = event.offsetX;
    const duration = this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.currentTime = (clickX / timelineWidth) * duration;
  }
  showQrCode: boolean = false;
   websiteUrl: string = 'environment.websiteUrl';
   // on environment.ts websiteUrl: 'https://raw-sample.web.app/',
   closeQrCodePopup() {
    this.showQrCode = !this.showQrCode;
  }

  onQrCodeClose() {
    this.showQrCode = false;
  }
}
