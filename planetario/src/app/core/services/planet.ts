import { Injectable, afterNextRender, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../models/planet.interface'; // Importamos 

@Injectable({
  providedIn: 'root', // El servicio está disponible de forma global en toda la aplicación
})
export class PlanetService { // Le cambiamos el nombre a la clase para que se entienda que es un servicio

  // 1. La dirección exacta del archivo PHP que aloja los datos en XAMPP
  private apiUrl = 'http://localhost/api-espacial/planets.php';
  
  // 2. Inyectamos el cliente HTTP (el motor que hace el AJAX moderno en Angular)
  private http = inject(HttpClient);
  
  // 3. LA VARIABLE REACTIVA (Signal): El núcleo del examen
  // Inicializamos una señal llamada 'planets' que por defecto contiene un array vacío ([])
  planets = signal<Planet[]>([]);

  constructor() {
    // 4. LA SOLUCIÓN AL ERROR DEL SSR:
    // afterNextRender es una función especial de Angular 21 que le dice al compilador:
    // "No intentes descargar los planetas mientras compilas en el servidor; espérate 
    // a que la web ya esté corriendo en el navegador del cliente".
    afterNextRender(() => {
      this.loadPlanets();
    });
  }

  // 5. El método privado que hace el "GET" a la API PHP [cite: 511-512]
  public loadPlanets() {
    // Hacemos la petición HTTP GET esperando recibir un array de objetos tipo Planet 
    this.http.get<Planet[]>(this.apiUrl).subscribe({
      // Canal 'next': Si el PHP responde con éxito con los datos de XAMPP 
      next: (data) => {
        this.planets.set(data); // .set() guarda los planetas dentro de nuestra Signal 
      },
      // Canal 'error': Si la conexión con XAMPP falla o la tabla no existe [cite: 538]
      error: (err) => {
        console.error('Error de comunicación con la base de datos estelar:', err);
      }
    });
  }
}