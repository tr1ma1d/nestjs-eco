import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';

import { ResultsModule } from './results/results.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UsersModule,
    ResultsModule,
  ],
})
export class AppModule { }
