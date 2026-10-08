var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let AuthService = class AuthService {
    users = [];
    register(name, email, password, confirmPassword) {
        const userExists = this.users.some(user => user.email === email);
        if (!userExists) {
            if (password !== confirmPassword) {
                return false;
            }
            this.users.push({ id: this.users.length + 1, name, email, password });
            return true;
        }
        return false;
    }
    login(email, password) {
        const user = this.users.find(user => user.email === email && user.password === password);
        return !!user;
    }
    forgetPassword(email) {
        const user = this.users.find(user => user.email === email);
        if (user) {
            const token = Math.random().toString(36).substring(2, 10);
            this.resetTokens.push({
                email: email,
                token: token
            });
            return token;
        }
        return null;
    }
    resetPassword(token, newPassword, confirmNewPassword) {
        if (newPassword !== confirmNewPassword) {
            return false;
        }
        const resetToken = this.resetTokens.find(item => item.token === token);
        if (!resetToken) {
            return false;
        }
        const user = this.users.find(user => user.email === resetToken.email);
        if (!user) {
            return false;
        }
        user.password = newPassword;
        this.resetTokens = this.resetTokens.filter(item => item.token !== token);
        return true;
    }
    resetTokens = [];
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map