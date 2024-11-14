import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  // Confi pa servir archivos estáticos
  app.use('/musica', (req, res, next) => {
    res.setHeader('Content-Type', 'audio/mp3');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }, express.static(join(__dirname, '..', 'musica')));
  
  app.use('/imagenes', (req, res, next) => {
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }, express.static(join(__dirname, '..', 'imagenes')));
  
  await app.listen(4000);
}
bootstrap();
