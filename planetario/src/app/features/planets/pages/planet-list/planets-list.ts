import { Component, signal, output, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from '../../../../core/models/planet.interface';
import { PlanetService } from '../../services/planet-service';
import { AuthService } from '../../../../core/services/auth-service'; // Importo el servicio de login

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './planets-list.html',
  styleUrl: './planets-list.css'
})

export class PlanetsList {

// Inyectamos las 3 herramientas que necesita esta pantalla
  protected planetService = inject(PlanetService); // Para leer la Signal de los planetas
  private router = inject(Router);                 // Para poder redirigir de pantalla
  private authService = inject(AuthService);       // Para poder borrar el token de usuario


// LÓGICA DEL EXAMEN: Función para cerrar sesión 

  logout() {
    this.authService.logout();       // 1. Llama al servicio para que borre el token del localStorage 
    this.router.navigate(['/login']); // 2. Te echa patitas a la calle de vuelta a la pantalla de login

  /*
  books = signal<Book[]>([]);
  onDelete = output<string>(); //
  onEdit = output<Book>();

  totalBooks = computed(() => this.books().length);



  // Al iniciar el componente, cargamos los datos de la API
  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books.set(data),
      error: (err) => console.error('Error cargando libros:', err)
    });
  }

  selectToEdit(book: Book) {
    // this.selectedBook.set({ ...book }); // Clonamos para no editar el original antes de guardar
    this.bookService.selectBook(book); // Guardamos el libro en el servicio
    console.log(book)
    this.router.navigate(['/management']); // Navegamos al formulario
  }

  deleteBook(code: string) {
    this.bookService.deleteBook(code).subscribe(() => {
      this.loadBooks(); // Refrescamos la lista tras borrar
    });
  }
*/
  }
}