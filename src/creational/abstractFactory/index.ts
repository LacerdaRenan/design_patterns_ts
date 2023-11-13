import { EnterpriseCustumerVehicleFactory } from "./factories/EnterpriseCustumerVehicleFactory";
import { IndividualCustumerVehicleFactory } from "./factories/IndividualCustumerVehicleFactory";

const enterpriseFactory = new EnterpriseCustumerVehicleFactory();
const indivudualFactory = new IndividualCustumerVehicleFactory();

const enterpriseCar = enterpriseFactory.createVehicle("Corolla", "Renan Lacerda");
const individualCar = indivudualFactory.createVehicle("Evoque", "Renan Rodrigues");

enterpriseCar.pickUp();
individualCar.pickUp();
