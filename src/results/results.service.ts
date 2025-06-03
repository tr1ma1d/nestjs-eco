import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResultDto, GetResultDto } from './dto/results.dto';

@Injectable()
export class ResultsService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(dto: CreateResultDto) {
        const { test, userId } = dto;

        const results = await this.prismaService.results.create({
            data: {
                test,
                userId
            }
        })
        if (!results) {
            new Error("Ошибка добавления");
        }
    }
    async findAllByUserId(dto: GetResultDto) {
        const { userId } = dto;
        const results = await this.prismaService.results.findMany({
            where: { userId: userId },
            include: {
                user: true,
            }
        });
        return results;
    }
}
