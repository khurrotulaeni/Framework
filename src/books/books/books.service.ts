import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
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

    //logic untuk menampilkan data
    findAll(): Book[] {
        return this.books;
    }

    //simpan data
    simpanData(createBookDto: CreateBookDto): Book {
        //simpan data ke dalam array books
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedyear: createBookDto.publishedyear,
            isAvailable: true
        };

        //simpan data ke array books
        this.books.push(newBook);

        return newBook;
    }

    //update data
    updateData(id: number, updateBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }

        const updatedBook: Book = {
            ...this.books[bookIndex],
            title: updateBookDto.title,
            author: updateBookDto.author,
            isbn: updateBookDto.isbn,
            publishedyear: updateBookDto.publishedyear,
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

    //hapus data
    hapusData(id: number): void {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }       
        this.books.splice(bookIndex, 1);
    }
}
