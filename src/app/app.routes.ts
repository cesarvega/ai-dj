import { Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { ScoreAppComponent } from './score-app/score-app.component';
import { AudioBookCardComponent } from './book-store/audio-book-card/audio-book-card.component';
import { AudioBookLibraryComponent } from './book-store/audio-book-library/audio-book-library.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePgComponent,
  },
  {
    path: 'score',
    component: ScoreAppComponent,
  },
  {
    path: 'book',
    component: AudioBookLibraryComponent,
  },
];
