import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    //menampilkan data
    @Get()
    findAll(@Query() query: any) {
        return this.booksService.findAll();
    }

    //menyimpan data
    @Post()
    simpanData(@Body() createBookDto: CreateBookDto) {
        return this.booksService.simpanData(createBookDto);
    }

    //mengupdate data
    @Put(':id')
    updateData(
        @Param('id') id: string,
        @Body() updateBookDto: CreateBookDto
    ) {
        //panggil service updateData
        return this.booksService.updateData(parseInt(id), updateBookDto);
    }

    //menghapus data
    @Delete(':id')
    hapusData(
        @Param('id') id: string) {
        //panggil service hapusData
        return this.booksService.hapusData(parseInt(id));
    }

}
