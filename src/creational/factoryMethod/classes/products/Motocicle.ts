import { Vehicle } from "./Vehicle";

export class Motocicle extends Vehicle {
  
  public moveX(direction: number): void {
    if (direction) console.log(`Movendo a moto ${this.model} ${this.colour} para frente...`);
    else console.log(`Movendo a moto ${this.model} ${this.colour} para trás...`);
  }

  public moveY(direction: number): void {
    if (direction) console.log(`Movendo a moto ${this.model} ${this.colour} para cima...`);
    else console.log(`Movendo a moto ${this.model} ${this.colour} para baixo...`);
  }
}