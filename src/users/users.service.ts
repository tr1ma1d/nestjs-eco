import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async findAll(){
        return await this.prismaService.users.findMany();
    }

    async login(dto: LoginUserDto) {
        try {
            const { email, password } = dto;
            const user = await this.prismaService.users.findUnique({
                where: { email: email },
            });

            if (!user) throw new NotFoundException('Пользователь не найден');

            if (password != user.password) throw new UnauthorizedException('Неверный пароль');

            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async create(dto: CreateUserDto) {
        const { email, fullname, password, education } = dto;

        var user = await this.prismaService.users.create({
            data: {
                email,
                fullname,
                password,
                education
            }
        })
        return user;
    }
}
