import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Check the current environment
  const environment = process.env.STAGE || 'dev' || 'prod';
  // Set allowed origins based on environment
  let allowedOrigins;
  if (environment === 'dev') {
    allowedOrigins = ['http://localhost:4200']; // Set allowed origins for development
  } else {
    allowedOrigins = ['https://main--comforting-chimera-42be6c.netlify.app']; // Set allowed origins for production
  }
  // Enable CORS with custom options
  const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: 'GET, POST, PUT, DELETE', // Set allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Set allowed headers
  };
  app.use(cors(corsOptions));

  await app.listen(3000);
}
bootstrap();
