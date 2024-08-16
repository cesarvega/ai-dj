import { Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { ScoreAppComponent } from './score-app/score-app.component';
import { AudioBookCardComponent } from './book-store/audio-book-card/audio-book-card.component';
import { AudioBookLibraryComponent } from './book-store/audio-book-library/audio-book-library.component';
import { LoginUniversalComponent } from './book-store/login-universal/login-universal.component';
import { HomeComponent } from './book-store/books/home/home.component';
import { HomeDetailedComponent } from './book-store/books/home-detailed/home-detailed.component';

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
  {
    path: 'login',
    component: LoginUniversalComponent
  },
  { path: 'book-sales', component: HomeComponent },
  { path: 'study', component: HomeDetailedComponent },
];
