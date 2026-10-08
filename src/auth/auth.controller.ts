import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('confirmPassword') confirmPassword: string,
    )
    {

        const result = this.authService.register(
            name,
            email,
            password,
            confirmPassword
        );

        if (!result) {
            return {
                message: 'Email sudah terdaftar'
            };
        }

        return {
            message: 'Register berhasil'
        };
    }

    @Post('login')
    login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
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

    @Post('forgot-password')
    forgotPassword(
        @Body('email') email: string,
    ) {
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

    @Put('reset-password/:token')
    resetPassword(
        @Param('token') token: string,
        @Body('newPassword') newPassword: string,
        @Body('confirmNewPassword') confirmNewPassword: string,
    ) {
        const result = this.authService.resetPassword(
            token,
            newPassword,
            confirmNewPassword
        );

        if (!result) {
            return {
                message: 'Token tidak valid atau password tidak sama'
            };
        }

        return {
            message: 'Password berhasil direset'
        };
    }
}
