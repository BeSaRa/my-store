export class Cloneable<T> {
  clone(overrides: Partial<T>): T {
    const Constructor = this.constructor as unknown as new<T>() => T;
    return Object.assign(new Constructor<T>(), overrides)
  }
}
