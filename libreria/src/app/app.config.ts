import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // motor de conexiones
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),  // <-- Vincula el mapa de carreteras de las URL
    provideHttpClient(), // <-- Habilita los superpoderes para hacer AJAX/HTTP
    provideClientHydration(withEventReplay())
    
  ]
};
