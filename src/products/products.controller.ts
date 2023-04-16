import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }
  @Post()
  createProduct(@Body() product: Product): Promise<Product> {
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productsService.deleteProduct(id);
  }
}