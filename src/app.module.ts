import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import {ConfigModule} from "./config/config.module";
import {ConfigService} from "./config/config.service";

@Module({
  imports: [
    ConfigModule,
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return typeOrmConfig(configService);
      },
      inject: [ConfigService]
    }),
  ]
})
export class AppModule {}
