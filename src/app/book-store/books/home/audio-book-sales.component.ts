// Importaciones de Angular Core y otras dependencias necesarias
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface AudioOption {
  name: string;
  src: string;
}
@Component({
  selector: 'app-audio-book-sales',
  templateUrl: './audio-book-sales.component.html',
  styleUrls: ['./audio-book-sales.component.scss'],
  imports: [MatButtonModule,CommonModule],
  standalone: true,
})
export class AudioBookSalesComponent {
  isPlaying = false;
  playbackRate = 1.0;
  data: any;
  bookId:string | null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('timeline', { static: true }) timeline!: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress!: ElementRef<HTMLDivElement>;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get('id')

  }


  ngOnInit(): void {
    this.http.get(`assets/db/book${this.bookId}.json`).subscribe({
      next: resp => {
        this.data = resp;
      },
      error: err => console.error(err.error.message),
      complete: () => console.log('Observable emitted the complete notification')     
    })
  }

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
