import { EnterpriseCustumer } from "../classes/Custumer/EnterpriseCustumer";
import { EnterpriseCar } from "../classes/Vehicle/EnterpriseCar";
import { ICustumer } from "../interfaces/ICustumer";
import { IVehicle } from "../interfaces/IVehicle";
import { CustumerVehicleFactory } from "./CustumerVehicleFactory";

export class EnterpriseCustumerVehicleFactory implements CustumerVehicleFactory {
   createCustumer(name: string): ICustumer {
     return new EnterpriseCustumer(name);
   }

  createVehicle(carName: string, custumerName: string): IVehicle {
    return new EnterpriseCar(carName, new EnterpriseCustumer(custumerName));
  }
}