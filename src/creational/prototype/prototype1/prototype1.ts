interface IPrototype {
  clone(): IPrototype;
}

export class Person implements IPrototype {

  public name: string;
  public age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }

  clone(): this {
    return Object.create(this);
  }
}