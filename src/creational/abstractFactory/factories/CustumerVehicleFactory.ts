import { ICustumer } from "../interfaces/ICustumer";
import { IVehicle } from "../interfaces/IVehicle";

export interface CustumerVehicleFactory {
  createCustumer(name: string): ICustumer;
  createVehicle(carName: string, custumerName: string): IVehicle;
}
