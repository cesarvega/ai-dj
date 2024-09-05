import { Routes } from '@angular/router';
// import { HomePgComponent } from './home-pg/home-pg.component';
// import { ScoreAppComponent } from './score-app/score-app.component';
// import { AudioBookCardComponent } from './book-store/audio-book-card/audio-book-card.component';
// import { AudioBookLibraryComponent } from './book-store/audio-book-library/audio-book-library.component';
// import { LoginUniversalComponent } from './book-store/login-universal/login-universal.component';
// import { AudioBookSubscribtionComponent } from './book-store/audio-book-subscription/audio-book-subscription.component'
// import { LinkSelectorComponent } from './link-selector/link-selector.component';
// import { AudioBookDetailComponent } from './book-store/audio-book-detail/audio-book-detail.component';

// import { AudioBookSalesComponent } from './book-store/books/home/audio-book-sales.component';
// import { AudioBookPlayerComponent } from './book-store/books/home-detailed/audio-book-player.component';
// import { LandingPgComponent } from './book-store/books/book-store-ui/landing-pg/landing-pg.component';
// import { authGuard } from './guards/auth.guard';
import { FormSampleProductsComponent } from './book-store/landing-sample-universal/form-sample-products/form-sample-products.component';
import {LandingSampleUniversalComponent} from './book-store/landing-sample-universal/landing-sample-universal.component';


export const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePgComponent,
  // },
  // {
  //   path: 'score',
  //   component: ScoreAppComponent,
  // },
 
  // {
   //  path: 'details-book',
    // component: AudioBookDetailComponent,
  // },
  
  // {
  //   path: 'login',
  //   component: LoginUniversalComponent
  // },
  // {
  //   path: 'subscribtion',
  //   component: AudioBookSubscribtionComponent,
  // },
  
   //{ path: 'book-sales/:id', component: AudioBookSalesComponent },
  
//  { path: 'study/:id', component: AudioBookPlayerComponent,canActivate: [authGuard]},

  // { path: 'link', component: LinkSelectorComponent },

 //  { path: 'store', component: LandingPgComponent },

  {path:'sample/:id', component: LandingSampleUniversalComponent},
  {path:'form', component: FormSampleProductsComponent},
  { path: '**', redirectTo: 'form' }


];
