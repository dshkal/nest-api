import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigService} from "./config.service";

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: 5432,
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
});
