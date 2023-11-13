import { ICustumer } from "../../interfaces/ICustumer";
import { IVehicle } from "../../interfaces/IVehicle";

export class IndividualCar implements IVehicle {
  private name: string;
  private readonly custumer: ICustumer;

  public constructor (name: string, custumer: ICustumer) {
    this.name = name;
    this.custumer = custumer;
  }
  public pickUp(): void {
    console.log(`${ this.name } está buscando ${ this.custumer.name }`); 
  }
}
