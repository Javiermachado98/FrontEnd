import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  
  // Inicializamos con null si estamos en el servidor
  private _currentUser = signal<string | null>(
    isPlatformBrowser(this.platformId) ? localStorage.getItem('user_token') : null
  );

  currentUser = this._currentUser.asReadonly();
  isAuthenticated = computed(() => !!this._currentUser());

  login(user: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user_token', 'fake-jwt-token');
    }
    this._currentUser.set(user);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user_token');
    }
    this._currentUser.set(null);
  }
}