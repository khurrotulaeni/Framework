var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { AuthService } from './auth.service.js';
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(name, email, password, confirmPassword) {
        const result = this.authService.register(name, email, password, confirmPassword);
        if (!result) {
            return {
                message: 'Email sudah terdaftar'
            };
        }
        return {
            message: 'Register berhasil'
        };
    }
    login(email, password) {
        const result = this.authService.login(email, password);
        if (!result) {
            return {
                message: 'Email atau password salah'
            };
        }
        return {
            message: 'Login berhasil'
        };
    }
    forgotPassword(email) {
        const token = this.authService.forgetPassword(email);
        if (!token) {
            return {
                message: 'Email belum terdaftar. Silakan register terlebih dahulu.'
            };
        }
        return {
            message: 'Token reset password berhasil di buat',
            token: token
        };
    }
    resetPassword(token, newPassword, confirmNewPassword) {
        const result = this.authService.resetPassword(token, newPassword, confirmNewPassword);
        if (!result) {
            return {
                message: 'Token tidak valid atau password tidak sama'
            };
        }
        return {
            message: 'Password berhasil direset'
        };
    }
};
__decorate([
    Post('register'),
    __param(0, Body('name')),
    __param(1, Body('email')),
    __param(2, Body('password')),
    __param(3, Body('confirmPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    Post('login'),
    __param(0, Body('email')),
    __param(1, Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    Post('forgot-password'),
    __param(0, Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    Put('reset-password/:token'),
    __param(0, Param('token')),
    __param(1, Body('newPassword')),
    __param(2, Body('confirmNewPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
AuthController = __decorate([
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map