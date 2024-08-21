import { Component, inject} from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiStore } from '../../store/ai.store';
import { ButtonsSalesComponent } from '../buttons-sales/buttons-sales.component';
import { AudioBookReviewsComponent } from '../audio-book-reviews/audio-book-reviews.component';
@Component({
  selector: 'app-audio-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsSalesComponent,
    AudioBookReviewsComponent    
  ],
  templateUrl: './audio-book-detail.component.html',
  styleUrl: './audio-book-detail.component.scss'
})
export class AudioBookDetailComponent {
  readonly aiStore = inject(AiStore)
  bookInfoDetails: any;

  constructor() { 
    this.bookInfoDetails = this.aiStore.selectedBookDetail;
  }


  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bookInfoDetails = this.aiStore.selectedBookDetail();
  }


}

