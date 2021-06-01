import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({...ormconfig, 
                           keepConnectionAlive: true, 
                           autoLoadEntities: true}),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
