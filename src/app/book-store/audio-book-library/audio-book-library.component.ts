import { Component, inject, NgModule } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { BookStore } from '../../models/albums';
import { AudioBookCardComponent } from '../audio-book-card/audio-book-card.component';
import { CommonModule } from '@angular/common';
import { AudioBookDetailComponent } from '../audio-book-detail/audio-book-detail.component';


@Component({
  selector: 'app-audio-book-library',
  standalone: true,
  imports: [
    AudioBookCardComponent,
    CommonModule,
    AudioBookDetailComponent
  ],
  templateUrl: './audio-book-library.component.html',
  styleUrl: './audio-book-library.component.scss'
})
export class AudioBookLibraryComponent {
  readonly aiStore = inject(AiStore);
  bookStore: BookStore = this.aiStore.books();
}

