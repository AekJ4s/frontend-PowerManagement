import { Routes } from '@angular/router';
import { RoomListComponent } from './components/roomlist/roomlist.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'roomlist', component: RoomListComponent },
];
