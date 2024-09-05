import { Component, inject, NgModule } from '@angular/core';
import { AiStore } from '../../store/ai.store';
import { AudioBookCardComponent } from '../audio-book-card/audio-book-card.component';
import { CommonModule } from '@angular/common';
import { AudioBookDetailComponent } from '../audio-book-detail/audio-book-detail.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-audio-book-library',
  standalone: true,
  imports: [
    AudioBookCardComponent,
    CommonModule,
    AudioBookDetailComponent,
  ],
  templateUrl: './audio-book-library.component.html',
  styleUrl: './audio-book-library.component.scss'
})
export class AudioBookLibraryComponent {
  readonly aiStore = inject(AiStore);
  bookStore: any;
  subscriptions: Subscription[] = [];
  private booksUrl = environment.booksActionsUrl; // Ruta del archivo JSON

  constructor(private http: HttpClient) {
  }

  getBooks(): void {
    const bookSubscribe =  this.http.get(this.booksUrl).subscribe({
      next: res => {
        this.bookStore = res;
        this.aiStore.updateBooks(this.bookStore);
      },
      error: err => console.error(err),
      complete: () => console.log('Observable emitted the complete notification')   
    })   
    this.subscriptions.push(bookSubscribe);  
  }

  ngOnInit(): void {
    this.getBooks()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }
  
}

