var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let BooksService = class BooksService {
    books = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedyear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedyear: 1960,
            isAvailable: false
        }
    ];
    findAll() {
        return this.books;
    }
    simpanData(createBookDto) {
        const newBook = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedyear: createBookDto.publishedyear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }
    updateData(id, updateBookDto) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }
        const updatedBook = {
            ...this.books[bookIndex],
            title: updateBookDto.title,
            author: updateBookDto.author,
            isbn: updateBookDto.isbn,
            publishedyear: updateBookDto.publishedyear,
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }
    hapusData(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }
        this.books.splice(bookIndex, 1);
    }
};
BooksService = __decorate([
    Injectable()
], BooksService);
export { BooksService };
//# sourceMappingURL=books.service.js.map