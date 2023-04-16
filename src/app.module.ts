import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
// import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ecommerce',
      username: 'postgres',
      password: 'postgres',
      entities: [Product],
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(CorsMiddleware).forRoutes('*'); // Register CorsMiddleware as a global middleware for all routes
  // }
}
