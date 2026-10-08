import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';

import { UserService } from './users.service.js';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UserService
    ) {}

    // GET semua user
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    // GET user berdasarkan id
    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return this.userService.findOne(
            Number(id)
        );
    }

    // POST membuat user
    @Post()
    create(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return this.userService.create({
            name,
            email,
            password
        });
    }

    // PUT mengubah password user
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body('password') password: string
    ) {
        return this.userService.update(
            Number(id),
            {
                password
            }
        );
    }

    // DELETE user
    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        const result = this.userService.remove(
            Number(id)
        );

        if (!result) {
            return {
                message: 'User tidak ditemukan'
            };
        }

        return {
            message: 'User berhasil dihapus'
        };
    }
}
