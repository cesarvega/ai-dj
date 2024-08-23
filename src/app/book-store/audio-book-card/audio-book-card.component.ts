import { Component, Input, inject, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-book-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './audio-book-card.component.html',
  styleUrls: ['./audio-book-card.component.scss']
})
export class AudioBookCardComponent implements OnInit {
  readonly aiStore = inject(AiStore);
  @Input() bookInfo: any;
  // private audio = new Audio('/assets/tracks/Astronaut On The Depths.mp3');
  private audio: HTMLAudioElement|undefined;
  isPlaying: boolean = false;
  averageRating: number = 0;
  audioSrc = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
   

    if (this.bookInfo && this.bookInfo.userReviews) {
      const totalReviews = this.bookInfo.userReviews.length;
      const sumRatings = this.bookInfo.userReviews.reduce((sum: number, review: any) => sum + review.rating, 0);
      this.averageRating = totalReviews > 0 ? sumRatings / totalReviews : 0;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio(this.bookInfo?.bookAudioSamplePath);
      this.audio.load();
      console.log(this.bookInfo?.bookAudioSamplePath)
    }
  }

  getBookResponse() {
    if (this.bookInfo === undefined) {
      return null;
    } else {
      return this.bookInfo;
    }
  }

  viewDetails() {
    this.aiStore.updateSelectedBookDetailStatus(true);
    this.aiStore.updateSelectedBookDetail(this.bookInfo);
    this.router.navigate(['/details-book']);
  }

  togglePlay() {
    if (this.isPlaying && this.audio) {
      this.audio.pause();
    } else if (this.audio) {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}