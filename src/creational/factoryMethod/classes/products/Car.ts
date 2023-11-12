import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {

  public moveX(direction: number): void {
    if (direction) console.log(`Movendo o carro ${this.model} ${this.colour} para frente...`);
    else console.log(`Movendo o carro ${this.model} ${this.colour} para trás...`);
  }
  public moveY(direction: number): void {
    if (direction) console.log(`Movendo o carro ${this.model} ${this.colour} para cima...`);
    else console.log(`Movendo o carro ${this.model} ${this.colour} para baixo...`);
  }
}