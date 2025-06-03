import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'Email пользователя',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'password123',
        description: 'Пароль пользователя (минимум 6 символов)',
        minLength: 6,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class CreateUserDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'Email пользователя',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'Ivanov Ivan Ivanovich',
        description: 'Имя пользователя',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    fullname: string

    @ApiProperty({
        example: 'password123',
        description: 'Пароль пользователя (минимум 6 символов)',
        minLength: 6,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @ApiProperty({
        example: 'Высшее образование',
        description: 'Образование пользователя',
        required: false
    })
    @IsString()
    education: string;
}