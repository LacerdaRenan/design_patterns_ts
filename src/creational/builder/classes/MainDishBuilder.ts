import { IMealBuilderProtocol } from "../interfaces/IMealBuilderProtocol";
import { MealBox } from "./MealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./Meals";

export class MainDishBuilder implements IMealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {    
    this._meal.add([new Rice('arroz branco', 10), new Beans('feijao preto', 10), new Meat('frango', 20)]);
    return this;
  }

  makeBevarage(): this {
    this._meal.add([new Beverage('guarana', 5)]);
    return this;
  }

  makeDessert(): this {
    this._meal.add([new Dessert('doce', 3)])
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}