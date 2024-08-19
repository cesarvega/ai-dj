import { Component, inject, NgModule } from '@angular/core';
import { AiStore } from '../../store/ai.store';
//import { BookStore } from '../../models/albums';
import { AudioBookCardComponent } from '../audio-book-card/audio-book-card.component';
import { CommonModule } from '@angular/common';
import { AudioBookDetailComponent } from '../audio-book-detail/audio-book-detail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  bookStore: any;
  private booksUrl = environment.booksActionsUrl; // Ruta del archivo JSON

constructor(private http: HttpClient) {
}

getBooks(): void {
  this.http.get(this.booksUrl).subscribe((res) => {
    this.bookStore = res;
    this.aiStore.updateBooks(this.bookStore);
  });
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getBooks()
}
  
}

