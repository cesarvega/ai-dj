// Importaciones de Angular Core y otras dependencias necesarias
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '@environments/environment';
interface AudioOption {
  name: string;
  src: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatButtonModule],
  standalone: true,
})
export class HomeComponent {
  isPlaying = false;
  playbackRate = 1.0;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('timeline', { static: true }) timeline!: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress!: ElementRef<HTMLDivElement>;

  buyNowButton(): void {
    window.location.href = environment.bookRealStatePaymentUrl;
  }

  onMouseOverBook(): void {
    const bookImage = document.querySelector('.book-image') as HTMLElement | null;
    if (bookImage) {
      bookImage.classList.add('hover');
    }
  }

  onMouseOutBook(): void {
    const bookImage = document.querySelector('.book-image') as HTMLElement | null;
    if (bookImage) {
      bookImage.classList.remove('hover');
    }
  }

  togglePlayPause(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
  }

  updateProgress(): void {
    const duration = this.audioPlayer.nativeElement.duration;
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.nativeElement.style.width = `${progressPercent}%`;
  }

  setDuration(): void {
    this.updateProgress();
  }

  seek(event: MouseEvent): void {
    const timelineWidth = this.timeline.nativeElement.clientWidth;
    const clickX = event.offsetX;
    const duration = this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.currentTime = (clickX / timelineWidth) * duration;
  }

  login(): void {
    window.location.href = '/login';
  }

  
}
