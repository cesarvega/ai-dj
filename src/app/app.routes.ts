import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { QrCodeLocationComponent } from './qr-code-location/qr-code-location.component';



export const routes: Routes = [
  {
    path: 'home',
    component: QrCodeLocationComponent,
  },
  { path: '**', redirectTo: 'home' } 

];
