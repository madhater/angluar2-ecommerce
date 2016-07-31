import { ProductImage } from './ProductImage';

export class ProductModelLight {
  constructor(
    public id: string,
    public name: string,
    public imageList: Array<ProductImage>) { }
}
