import { Cloneable } from "./cloneable";

export class Product extends Cloneable<Product> {
  id!: number;
  name!: string;
  price!: number;
  url!: string;
  description!: string
}
