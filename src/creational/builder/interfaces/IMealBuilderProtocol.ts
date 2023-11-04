import { MealBox } from "../classes/MealBox";
import { Beverage } from "../classes/Meals";
import { IMealCompositeProtocol } from "./IMealCompositeProtocol";

export interface IMealBuilderProtocol extends IMealCompositeProtocol {
  makeMeal(): this;
  makeDessert(): this;
  makeBevarage(): this;
  getMeal(): MealBox;
}