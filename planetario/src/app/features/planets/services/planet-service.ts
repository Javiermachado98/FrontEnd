import { Injectable, afterNextRender, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../../../core/models/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  // Cambia esta URL por la ruta real donde esté tu index.php
  private apiUrl = 'http://localhost:8000/api-espacial/planets.php';
  // Inyectamos el cliente HTTP
  private http = inject(HttpClient);
  // Inicializamos la Signal vacía
  planets = signal<Planet[]>([]);

constructor() {
    // ESTA ES LA MAGIA: Esto obliga a que la petición se haga 
    // solo en el navegador y no bloquee el servidor.
    afterNextRender(() => {
      this.loadPlanets();
    });
  }

  // Método privado que va por el JSON
  private loadPlanets() {
    this.http.get<Planet[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.planets.set(data);
      },
      error: (err) => {
        console.error('Error de comunicación con la base de datos estelar:', err);
      }
    });
  }


  /*


  // Libro que se está editando en el formulario
  selectedBook = signal<Book>({ code: '', title: '', author: '', price: 0 });

  selectBook(book: any) {
    console.log("SERVICIO: " + book)
    this.selectedBook.set(book);
  }

  // Listar todos los libros (GET)
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // Obtener un solo libro por su código (GET con parámetro)
  getBook(code: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}?code=${code}`);
  }

  // Crear un nuevo libro (POST)
  addBook(book: Book): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  // Actualizar un libro (PUT)
  updateBook(book: Book): Observable<any> {
    return this.http.put(this.apiUrl, book);
  }

  // Eliminar un libro (DELETE con parámetro)
  deleteBook(code: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}?code=${code}`);
  }
  */


}