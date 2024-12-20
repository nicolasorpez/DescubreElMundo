import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { PuntosInteresComponent } from './puntos-interes/puntos-interes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'puntos-interes', component: PuntosInteresComponent },
];
