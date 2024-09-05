import { Component, inject } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-book-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-book-reviews.component.html',
  styleUrl: './audio-book-reviews.component.scss'
})
export class AudioBookReviewsComponent {
  readonly aiStore = inject(AiStore)

  reviews: any[];

  constructor() {
    this.reviews = this.aiStore.selectedBookDetail()?.userReviews || [];
    }
    
}
    
