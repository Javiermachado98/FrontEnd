import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './AuthService'; // Subimos a la raíz para conectar con la sesión

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inyectamos el comprobador de tokens
  const router = inject(Router);           // Inyectamos el motor de navegación

  // Si el servicio dice que el usuario está autenticado, devolvemos true (puerta abierta)
  if (authService.isAuthenticated()) {
    return true; 
  }

  // Si no está autenticado, bloqueamos la pantalla y lo redirigimos al Login
  return router.parseUrl('/login');
};