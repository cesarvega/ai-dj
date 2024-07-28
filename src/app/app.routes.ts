import { Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { ScoreAppComponent } from './score-app/score-app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePgComponent,
  },
  {
    path: 'score',
    component: ScoreAppComponent,
  },
];
