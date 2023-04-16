import { BaseEntity, Column, Entity, GeoJSON, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  images1: string;

  @Column()
  images2: string;

  @Column()
  images3: string;
}
