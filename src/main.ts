import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8000',
      'https://proffee-bm1j.onrender.com'
    ],
  });

  await app.enableShutdownHooks();

  app.use((req, res, next) => {
    if(
      !req.url.startsWith('/api') &&
      !req.url.startsWith('/static') &&
      !req.url.includes('.')
    ) {
      res.sendFile(join(__dirname, '../../client/build/index.html'));
    } else {
      next();
    }
  });

  await app.listen(8000);
}
bootstrap();
