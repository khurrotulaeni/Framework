export declare class AuthService {
    private users;
    register(name: string, email: string, password: string, confirmPassword: string): boolean;
    login(email: string, password: string): boolean;
    forgetPassword(email: string): string | null;
    resetPassword(token: string, newPassword: string, confirmNewPassword: string): boolean;
    private resetTokens;
}
