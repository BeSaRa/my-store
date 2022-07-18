export class Product {
  id!: number;
  name!: string;
  price!: number;
  url!: string;
  description!: string

  clone(overrides: Partial<Product>): Product {
    const Constructor = this.constructor as unknown as new<T>() => T;
    return Object.assign(new Constructor<Product>(), overrides)
  }
}
