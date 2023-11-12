import { Vehicle } from "../products/Vehicle";

export abstract class Creator {
  abstract getVehicle(model: string, colour: string): Vehicle;
}