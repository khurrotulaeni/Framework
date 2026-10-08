import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
export declare class BooksService {
    private books;
    findAll(): Book[];
    simpanData(createBookDto: CreateBookDto): Book;
    updateData(id: number, updateBookDto: CreateBookDto): Book;
    hapusData(id: number): void;
}
