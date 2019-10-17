import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import {ConfigModule} from "./config/config.module";

@Module({
  imports: [
    ConfigModule,
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ]
})
export class AppModule {}
