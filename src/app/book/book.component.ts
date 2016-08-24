import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book/book';
import { BookService } from '../shared/book.service';

@Component({
    moduleId: module.id, 
    selector: 'book',
    templateUrl: 'book.component.html',
    providers: [BookService]
})
export class BookComponent implements OnInit {
    books: Book[] = [];

    constructor(
        private router: Router,
        private bookService: BookService) { }

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }

    ngOnInit() { 
        this.getBooks();
    }

}