import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [], // No necesita FormsModule porque solo pinta datos, no tiene inputs
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList implements OnInit {
  public bookService = inject(BookService);
  private router = inject(Router);

  // Signal donde almacenamos la lista de libros que viene de la Base de Datos
  books = signal<Book[]>([]);

  ngOnInit() {
    this.loadBooks(); // En cuanto se monta la pantalla, pide los libros
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books.set(data),
      error: (err) => console.error('Error al conectar con XAMPP:', err)
    });
  }

  // Al pulsar Editar, metemos el libro en el buzón compartido y saltamos de pantalla
  selectToEdit(book: Book) {
    this.bookService.selectBook(book);
    this.router.navigate(['/management']);
  }

  deleteBook(code: string) {
    if (confirm('¿Seguro que deseas eliminar este libro?')) {
      this.bookService.deleteBook(code).subscribe({
        next: () => this.loadBooks() // Refresca la tabla al instante tras borrar
      });
    }
  }
  
  goToCreate() {
    // Vaciamos el buzón para decirle al formulario que es un libro NUEVO (Alta)
    this.bookService.selectBook({ code: '', title: '', author: '', price: 0 });
    this.router.navigate(['/management']);
  }
}