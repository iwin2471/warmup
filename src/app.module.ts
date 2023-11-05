import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import 'dotenv/config'
import { User } from './user/entities/user.entity';
import { Tags } from './user/entities/tags.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL,
      port: 5432,
      password: process.env.DATABASE_PASSWD,
      username: 'postgres',
      entities: [User,Tags],
      database: 'warmup',
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
