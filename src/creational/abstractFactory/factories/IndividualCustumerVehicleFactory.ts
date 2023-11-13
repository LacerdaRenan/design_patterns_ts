import { IndividualCustumer } from "../classes/Custumer/IndividualCustumer";
import { IndividualCar } from "../classes/Vehicle/IndividualCar";
import { ICustumer } from "../interfaces/ICustumer";
import { IVehicle } from "../interfaces/IVehicle";
import { CustumerVehicleFactory } from "./CustumerVehicleFactory";

export class IndividualCustumerVehicleFactory implements CustumerVehicleFactory {
  createCustumer(name: string): ICustumer {
    return new IndividualCustumer(name);
  }

  createVehicle(carName: string, custumerName: string): IVehicle {
    return new IndividualCar(carName, new IndividualCustumer(custumerName));
  }
}
