import { Motocicle } from "../products/Motocicle";
import { Vehicle } from "../products/Vehicle";
import { Creator } from "./Creator";

export class MotocicleCreator extends Creator {
  getVehicle(model: string, colour: string): Vehicle {
    return new Motocicle(colour, model);
  }
}