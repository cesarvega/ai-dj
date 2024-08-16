import { Component, inject } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { BookStore } from '../../models/albums';

@Component({
  selector: 'app-audio-book-library',
  standalone: true,
  imports: [],
  templateUrl: './audio-book-library.component.html',
  styleUrl: './audio-book-library.component.scss'
})
export class AudioBookLibraryComponent {
  readonly aiStore = inject(AiStore);
  bookStore: BookStore = this.aiStore.books();
}
