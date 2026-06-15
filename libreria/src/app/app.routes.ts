import { Routes } from '@angular/router';
import { BookManagement } from './elements/book-management/book-management';
import { BookList } from './elements/book-list/book-list';
import { ContactForm } from './elements/contact-form/contact-form';
import { Login } from './elements/login/login';
import { authGuard } from './auth-guard';
import { guestGuard } from './guest-guard'; // <-- Añadido el guardia inverso

export const routes: Routes = [
    { path: 'books', component: BookList, canActivate: [authGuard] },
    { path: 'management', component: BookManagement, canActivate: [authGuard] },
    { path: 'contact', component: ContactForm, canActivate: [authGuard] },
    { path: 'login', component: Login, canActivate: [guestGuard] }, // El invitado no ve el login si ya está autenticado
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];