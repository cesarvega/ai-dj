import { Component, inject, PLATFORM_ID, Inject} from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { AiStore } from '../../store/ai.store';
import { ButtonsSalesComponent } from '../buttons-sales/buttons-sales.component';
import { AudioBookReviewsComponent } from '../audio-book-reviews/audio-book-reviews.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-audio-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsSalesComponent,
    AudioBookReviewsComponent,
    MatButtonModule
  ],
  templateUrl: './audio-book-detail.component.html',
  styleUrl: './audio-book-detail.component.scss'
})

export class AudioBookDetailComponent {
  readonly aiStore = inject(AiStore)
  bookInfoDetails: any;
  averageRating: number = 0;
  isPlaying: boolean = false;
  private audio: HTMLAudioElement|undefined;
  samplePhat:string | undefined;
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object

  ) { 
    this.bookInfoDetails = this.aiStore?.selectedBookDetail();
  }

  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
    this.bookInfoDetails = this.aiStore.selectedBookDetail();
    this.samplePhat = this.aiStore.selectedBookDetail()?.bookAudioSamplePath;
 //   this.audio = new Audio(this.aiStore.selectedBookDetail()?.bookAudioSamplePath);
 this.audio = new Audio(this.samplePhat)  
 this.audio.load();
    }
    this.bookInfoDetails = this.aiStore.selectedBookDetail();
    if (this.bookInfoDetails && this.bookInfoDetails.userReviews) {
      const totalReviews = this.bookInfoDetails.userReviews.length;
      const sumRatings = this.bookInfoDetails.userReviews.reduce((sum: number, review: any) => sum + review.rating, 0);
      this.averageRating = totalReviews > 0 ? sumRatings / totalReviews : 0;
    }
  }

  openBookPlayer() {
    // this.aiStore.updateBookPlayerStatus(true);
    // I want to open a a new route and pass an parameter
    this.router.navigate(['/study', this.bookInfoDetails.bookId]);
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

