import { Body, Controller, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto, GetResultDto } from './dto/results.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {
  }

  @Post('create')
  async createResults(@Body() dto: CreateResultDto){
    return await this.resultsService.create(dto)
  }

  @Post('find-usertest')
  async findAllByUserId(@Body() dto: GetResultDto){
    return await this.resultsService.findAllByUserId(dto);
  }
}
