import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './AuthService';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si el usuario YA inició sesión correctamente, no tiene sentido que vea el Login.
  // El guardia lo intercepta y lo devuelve automáticamente al catálogo de libros.
  if (authService.isAuthenticated()) {
    return router.parseUrl('/books'); 
  }

  // Si es un invitado real (no está logueado), le permite ver la pantalla de Login sin problemas.
  return true;
};