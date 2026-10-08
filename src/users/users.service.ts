import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    // menyimpan data user sementara
    private users: {
        id: number;
        name: string;
        email: string;
        password: string;
    }[] = [];

    // mencari user berdasarkan email
    findByEmail(email: string) {
        return this.users.find(
            user => user.email === email
        );
    }

    // GET semua user
    findAll() {
        return this.users;
    }

    // GET user berdasarkan id
    findOne(id: number) {
        return this.users.find(
            user => user.id === id
        );
    }

    // POST membuat user
    create(data: {
        name: string;
        email: string;
        password: string;
    }) {
        const newUser = {
            id: this.users.length + 1,
            name: data.name,
            email: data.email,
            password: data.password,
        };

        this.users.push(newUser);

        return {
            message: 'Register berhasil',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            },
        };
    }

    // PUT mengubah user
    update(
        id: number,
        data: {
            password?: string;
        }
    ) {
        const user = this.users.find(
            user => user.id === id
        );

        if (!user) {
            return null;
        }

        if (data.password) {
            user.password = data.password;
        }

        return user;
    }

    // DELETE user
    remove(id: number) {
        const index = this.users.findIndex(
            user => user.id === id
        );

        if (index === -1) {
            return false;
        }

        this.users.splice(index, 1);

        return true;
    }
}