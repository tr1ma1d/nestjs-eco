import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async login(dto: LoginUserDto) {
        try {
            const { email, password } = dto;
            const user = await this.prismaService.user.findUnique({
                where: { email },
                select: {
                    id: true,
                    password: true
                }
            });

            if (!user) throw new NotFoundException('Пользователь не найден');

            if (password != user.password) throw new UnauthorizedException('Неверный пароль');

            return user;
        }
        catch (error) {
            console.error('Login error: ', error);
            throw error;
        }
    }

    async create(dto: CreateUserDto) {
        const { email, password, education } = dto;

        var user = await this.prismaService.user.create({
            data: {
                email,
                password,
                education
            }
        })
        return user;
    }
}
