import { MainDishBuilder } from "./classes/MainDishBuilder";

const mainDishBuilder = new MainDishBuilder()

mainDishBuilder.makeMeal().makeDessert().makeBevarage();

console.log(mainDishBuilder.getMeal());

console.log(mainDishBuilder.getPrice());
