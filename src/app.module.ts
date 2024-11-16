import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./entities/user.entity";
import {UserService} from "./services/user.service";
import {UserController} from "./controller/user.controller";
import {UserRepository} from "./repositories/user.repository";

const userControllers = [UserController]
const userFeatures = [UserService,UserRepository]


dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
      url: process.env.NEON_URL,
      ssl: { rejectUnauthorized: false },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [...userControllers],
  providers: [...userFeatures],
})
export class AppModule {}
