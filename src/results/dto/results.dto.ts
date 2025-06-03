import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateResultDto {
    @ApiProperty({
        description: 'Название теста',
        example: 'Тест по математике',
    })
    @IsString()
    test: string;

    @ApiProperty({
        description: 'ID пользователя',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString()
    userId: string;
}
export class GetResultDto {
    @ApiProperty({
        description: 'ID пользователя для получения результатов',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString()
    userId: string;
}