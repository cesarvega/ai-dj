import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-book-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './audio-book-card.component.html',
  styleUrl: './audio-book-card.component.scss'
})
export class AudioBookCardComponent {
  readonly aiStore = inject(AiStore)
  @Input() bookInfo: any;
  private audio = new Audio('/assets/tracks/Astronaut On The Depths.mp3');
  isPlaying: boolean = false;
  
  
  
  
  getBookResponse(){
    if (this.bookInfo === undefined) {
      return null
    }else{
      return this.bookInfo
    }
  }
  viewDetails(){
    this.aiStore.updateSelectedBookDetailStatus(true);
   this.aiStore.updateSelectedBookDetail(this.bookInfo);
   window.scrollTo({ top: 0, behavior: 'smooth' });

  
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