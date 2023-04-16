import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with custom options
  const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:4200', // Set allowed origins
    methods: 'GET, POST, PUT, DELETE', // Set allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Set allowed headers
  };
  app.use(cors(corsOptions));

  await app.listen(3000);
}
bootstrap();
