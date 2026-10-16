import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty({message: 'Nama harus diisi'})
    readonly name: string;

    @IsNotEmpty({message: 'Email harus diisi'})
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({message: 'password harus diisi'})
    @MinLength(8, {message: 'password harus berisikan 8 karakter'})
    readonly password: string;

    @IsNotEmpty({message: 'password harus diisi'})
    @MinLength(8, {message: 'password harus berisikan 8 karakter'})
    readonly confirmpassword: string;
}