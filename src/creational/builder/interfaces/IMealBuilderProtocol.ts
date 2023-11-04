import { IMealCompositeProtocol } from "./IMealCompositeProtocol";

export interface IMealBuilderProtocol {
  makeMeal(): this;
  makeBevarage(): this;
  makeDessert(): this;
}