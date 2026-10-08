import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(query: any): import("./entities/book-entity.js").Book[];
    simpanData(createBookDto: CreateBookDto): import("./entities/book-entity.js").Book;
    updateData(id: string, updateBookDto: CreateBookDto): import("./entities/book-entity.js").Book;
    hapusData(id: string): void;
}
