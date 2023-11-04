import { IMealBuilderProtocol } from "../interfaces/IMealBuilderProtocol";
import { MealBox } from "./MealBox";
import { Beverage, Dessert, Rice, VeganMix } from "./Meals";

export class VeganDishBuilder implements IMealBuilderProtocol {

  private _meal = new MealBox();

  public makeMeal(): this {
    this._meal.add([new Rice("arroz integral",15), new Rice("Feijao Carioca", 10), new VeganMix("vegan meat", 30)]);
    return this;
  }

  public makeBevarage(): this {
    this._meal.add([new Beverage("Suco de laranja", 20)]);
    return this;
  }

  makeDessert(): this {
    this._meal.add([new Dessert("Doce de goiaba", 2)]);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
  
  public getPrice(): number {
    return this._meal.getPrice();
  }
}