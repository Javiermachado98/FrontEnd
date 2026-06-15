import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- ¡ESTA LÍNEA ES LA QUE FALTA!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <-- Ahora sí, Angular sabe qué es el RouterOutlet
  templateUrl: './app.html'
})
export class App {}