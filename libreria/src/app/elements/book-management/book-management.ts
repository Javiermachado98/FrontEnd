import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [FormsModule], // Obligatorio para usar [(ngModel)]
  templateUrl: './book-management.html',
  styleUrl: './book-management.css'
})
export class BookManagement implements OnInit {
  private bookService = inject(BookService);
  private router = inject(Router);

  // Creamos la Signal 'selected' que mapea los campos en la plantilla HTML de tu compañero
  protected selected = signal<Book>({ code: '', title: '', author: '', price: 0 });
  protected isEditing = false;

  ngOnInit() {
    const bookData = this.bookService.selectedBook();
    // Si el código NO está vacío, significa que el usuario pulsó el botón "Editar" de la tabla
    if (bookData.code !== '') {
      this.selected.set({ ...bookData }); // Clonamos los datos dentro de nuestra Signal local
      this.isEditing = true;
    }
  }

  // Se ejecuta al pulsar el botón de Añadir
  Createbook() {
    this.bookService.addBook(this.selected()).subscribe({
      next: () => this.router.navigate(['/books']) // Al guardar con éxito, volvemos al listado
    });
  }

  // Se ejecuta al pulsar el botón de Modificar
  updateBook() {
    this.bookService.updatedBook(this.selected()).subscribe({
      next: () => this.router.navigate(['/books']) // Al actualizar con éxito, volvemos al listado
    });
  }
}