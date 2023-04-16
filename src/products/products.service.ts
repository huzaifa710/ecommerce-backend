import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    return this.productRepository.update(id, product).then(() => {
      return this.getProductById(id);
    });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
