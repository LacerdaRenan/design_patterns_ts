import { IMealCompositeProtocol } from "../interfaces/IMealCompositeProtocol";

export abstract class AbstractMeal implements IMealCompositeProtocol {

  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }
  
  getPrice(): number {
    return this.price;
  }
}