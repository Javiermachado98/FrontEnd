import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth-guard';
import { PlanetsList } from './features/planets/pages/planet-list/planets-list';
import { AgencyContact } from './features/agency/pages/agency-contact/agency-contact';
import { Login } from './core/auth/login/login';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'planets', component: PlanetsList, canActivate: [authGuard] }, // Bloqueada por el guardia!
    { path: 'contact', component: AgencyContact, canActivate: [authGuard] }, // Bloqueada por el guardia!
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Si entran a la raíz, los manda al login
];