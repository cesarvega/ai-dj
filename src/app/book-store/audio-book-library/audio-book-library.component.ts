import { Component, inject, NgModule } from '@angular/core';
import { AiStore } from '../../store/ai.store';
//import { BookStore } from '../../models/albums';
import { AudioBookCardComponent } from '../audio-book-card/audio-book-card.component';
import { CommonModule } from '@angular/common';
import { AudioBookDetailComponent } from '../audio-book-detail/audio-book-detail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  bookStore: any[] = [];
  private booksUrl = 'assets/db/books.json'; // Ruta del archivo JSON

constructor(private http: HttpClient) {
}

getBooks(): Observable<any> {
  return this.http.get<any>(this.booksUrl);
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getBooks().subscribe(data => {
    this.bookStore = data;
  });
}
  

}

