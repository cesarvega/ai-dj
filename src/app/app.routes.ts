import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { QrCodeLocationComponent } from './qr-code-location/qr-code-location.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { CustomerSessionFormComponent } from './customer-session-form/customer-session-form.component';



export const routes: Routes = [
  {
    path: 'home',
    component: QrCodeLocationComponent,
  },
  {
    path: 'loc',
    component: TicketManagementComponent,
  },
  {
    path: 'session',
    component: CustomerSessionFormComponent,
  },
  { path: '**', redirectTo: 'loc' } 

];
