import { Car } from "../products/Car";
import { Vehicle } from "../products/Vehicle";
import { Creator } from "./Creator";

export class CarCreator extends Creator {
  getVehicle(model: string, colour: string): Vehicle {
    return new Car(colour, model);
  }
}