import { Injectable } from '@angular/core';
import { Book } from '../book/book';
import { BOOKS } from '../book/mock-books';

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]>  {
        return Promise.resolve(BOOKS);
    }
}