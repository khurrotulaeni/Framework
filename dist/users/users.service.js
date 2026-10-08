var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let UserService = class UserService {
    users = [];
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find(user => user.id === id);
    }
    create(data) {
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
    update(id, data) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            return null;
        }
        if (data.password) {
            user.password = data.password;
        }
        return user;
    }
    remove(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }
};
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=users.service.js.map