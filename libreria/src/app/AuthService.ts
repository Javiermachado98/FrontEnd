import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root' // disponible en toda la app sin necesidad de declararlo en módulos
})
export class AuthService {

    // detecta si la app corre en el navegador o en el servidor (SSR)
    private platformId = inject(PLATFORM_ID);
    private router = inject(Router);

    // señal privada con el usuario actual; lee localStorage solo si estamos en el navegador
    private _currentUser = signal<string | null>(
        isPlatformBrowser(this.platformId) ? localStorage.getItem('user_token') : null
    );

    // versión pública de solo lectura: los componentes pueden leerla pero no modificarla
    currentUser = this._currentUser.asReadonly();

    // señal derivada: true si hay usuario, false si es null — se recalcula automáticamente
    isAuthenticated = computed(() => !!this._currentUser());

    login(user: string): void {
        // guarda un token en localStorage para persistir la sesión al recargar la página
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('user_token', 'fake-jwt-token');
        }
        // actualiza la señal para que todos los componentes que la usen reaccionen al cambio
        this._currentUser.set(user);
    }

    logout(): void {
        // elimina el token del navegador para que la sesión no persista tras recargar
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('user_token');
            this.router.navigate(['/login']);
        }
        // resetea la señal a null, lo que automáticamente pone isAuthenticated en false
        this._currentUser.set(null);
    }
    isLoggedIn(): boolean {
        return this.isAuthenticated();
    }
}