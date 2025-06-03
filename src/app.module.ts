import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MoService } from './prisma/mo/mo.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, MoService],
})
export class AppModule {}
