import { AuthService } from './auth.service.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(name: string, email: string, password: string, confirmPassword: string): {
        message: string;
    };
    login(email: string, password: string): {
        message: string;
    };
    forgotPassword(email: string): {
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    };
    resetPassword(token: string, newPassword: string, confirmNewPassword: string): {
        message: string;
    };
}
