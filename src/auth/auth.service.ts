import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    //menyimpan data user sementara dalam bentuk array
    private users: { 
        id: number;
        name: string; 
        email: string; 
        password: string 
    }[] = [];


    // register user baru
    register(
        name: string, 
        email: string, 
        password: string,
        confirmPassword: string
     ): boolean {

        //mengecek apakah email sudah terdaftar
        const userExists = this.users.some(user => user.email === email);
        if (!userExists) {

            if (password !== confirmPassword) {
                return false;
            }

            //menambahkan user baru ke dalam array
            this.users.push({ id: this.users.length + 1, name, email, password });
            //mengembalikan true jika register berhasil
            return true;
        }
        return false;
    }

    // login user
    login(email: string, password: string): boolean {

        //mencari user berdasarkan email dan password
        const user = this.users.find(
        user => user.email === email && user.password === password
    );

        //mengembalikan true jika user ditemukan, false jika tidak
        return !!user;
    }

    // forgot password
    forgetPassword(email: string): string | null {

        // mencari user berdasarkan email
        const user = this.users.find(user => user.email === email);

        if (user) {

            // membuat token sederhana untuk reset password
            const token = Math.random().toString(36).substring(2, 10);

            // menyimpan email dan token
            this.resetTokens.push({
                email: email,
                token: token
            });

            // mengembalikan token
            return token;
        }

        // jika email tidak ditemukan
        return null;
    }

    // reset password menggunakan token
    resetPassword(
        token: string,
        newPassword: string,
        confirmNewPassword: string
    ): boolean {

        // mengecek password baru dan konfirmasi
        if (newPassword !== confirmNewPassword) {
            return false;
        }

        // mencari token reset
        const resetToken = this.resetTokens.find(
            item => item.token === token
        );

        if (!resetToken) {
            return false;
        }

        // mencari user berdasarkan email dari token
        const user = this.users.find(
            user => user.email === resetToken.email
        );

        if (!user) {
            return false;
        }

        // mengubah password
        user.password = newPassword;

        // menghapus token setelah digunakan
        this.resetTokens = this.resetTokens.filter(
            item => item.token !== token
        );

        return true;
    }

    private resetTokens: {
        email: string;
        token: string;
    }[] = [];
}