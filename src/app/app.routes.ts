import { Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { ScoreAppComponent } from './score-app/score-app.component';
import { AudioBookCardComponent } from './book-store/audio-book-card/audio-book-card.component';
import { AudioBookLibraryComponent } from './book-store/audio-book-library/audio-book-library.component';
import { LoginUniversalComponent } from './book-store/login-universal/login-universal.component';
import { AudioBookSalesComponent } from './book-store/books/home/audio-book-sales.component';
import { AudioBookPlayerComponent } from './book-store/books/home-detailed/audio-book-player.component';
import { AudioBookSubscribtionComponent } from './book-store/audio-book-subscribtion/audio-book-subscribtion.component'
import { LinkSelectorComponent } from './link-selector/link-selector.component';

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
  {
    path: 'subscribtion',
    component: AudioBookSubscribtionComponent

  },
  { path: 'book-sales', component: AudioBookSalesComponent },
  { path: 'study', component: AudioBookPlayerComponent },

  { path: 'link', component: LinkSelectorComponent },
  { path: '**', redirectTo: '/link' }

];
