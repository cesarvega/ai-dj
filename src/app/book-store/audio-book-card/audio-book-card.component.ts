import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { AiStore } from '../../store/ai.store';

@Component({
  selector: 'app-audio-book-card',
  standalone: true,
  imports: [],
  templateUrl: './audio-book-card.component.html',
  styleUrl: './audio-book-card.component.scss'
})
export class AudioBookCardComponent {
  readonly aiStore = inject(AiStore)
  @Input() bookInfo: any;

  getBookResponse(){
    if (this.bookInfo === undefined) {
      return null
    }else{
      return this.bookInfo
    }
  }
  viewDetails(){
    this.aiStore.updateSelectedBookDetailStatus(true);
  // //  this.aiStore.updateSelectedBookDetail(this.bookInfo);
   }






}