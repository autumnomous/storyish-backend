import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CreatorsModule } from './creators/creators.module';
import { Creator } from './creators/creator.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Creator],
    synchronize: true // remove for production
  }), CreatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
