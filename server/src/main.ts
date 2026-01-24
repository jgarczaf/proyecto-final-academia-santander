import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // DEBUG: listar rutas Express mapeadas por Nest
  const server = app.getHttpAdapter().getInstance();
  if (server._router?.stack) {
    console.log('--- ROUTES ---');
    server._router.stack
      .filter((l: any) => l.route)
      .forEach((l: any) => {
        const path = l.route.path;
        const methods = Object.keys(l.route.methods || {})
          .join(',')
          .toUpperCase();
        console.log(`${methods.padEnd(6)} ${path}`);
      });
    console.log('---------------');
  }

  // Configuración de CORS para Shell (4200) y Remote (4201)
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'http://localhost:4201',
      'http://127.0.0.1:4200',
      'http://127.0.0.1:4201',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Validación global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
}
bootstrap();
