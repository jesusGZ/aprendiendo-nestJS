import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TypeORMExceptionFilter } from 'filters/typeorm-exceptions.filter';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest Workshop')
    .setDescription('Nest Workshop')
    .setVersion('1.0')
    .build();
  app.useGlobalFilters(new TypeORMExceptionFilter());
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
