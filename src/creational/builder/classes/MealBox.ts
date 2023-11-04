import { IMealCompositeProtocol } from "../interfaces/IMealCompositeProtocol";

export class MealBox implements IMealCompositeProtocol {

  // Essa implementação também permite uma MealBox conter outras Mealbox, não sei se é o correto...
  private readonly _children: IMealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((accumulator, current) => {
      return accumulator + current.getPrice();
     }, 0);
  }

  add(meals: IMealCompositeProtocol[]): void {
    meals.forEach(meal => this._children.push(meal));
  }
}