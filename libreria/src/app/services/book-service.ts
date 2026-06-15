import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book";

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8000/bookstore/crud.php';

    public selectedBook = signal<Book>({ code: '', title: '', author: '', price: 0 });

    selectBook(book: Book) {
        this.selectedBook.set(book);
    }

    //CRUD
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }

    addBook(book: Book): Observable<any>{
        return this.http.post(this.apiUrl, book);
    }

    updatedBook(book: Book): Observable<any>{
       return this.http.put(this.apiUrl, book); 
    }

    deleteBook(code: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/?code=${code}`);
    }


}