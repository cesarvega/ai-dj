import { Component, Input, inject, OnInit } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { CommonModule } from '@angular/common';
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
  private audio = new Audio('/assets/tracks/Astronaut On The Depths.mp3');
  isPlaying: boolean = false;
  averageRating: number = 0;

  constructor(private router: Router) {
    this.audio.load();
  }

  ngOnInit() {
    if (this.bookInfo && this.bookInfo.userReviews) {
      const totalReviews = this.bookInfo.userReviews.length;
      const sumRatings = this.bookInfo.userReviews.reduce((sum: number, review: any) => sum + review.rating, 0);
      this.averageRating = totalReviews > 0 ? sumRatings / totalReviews : 0;
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
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}