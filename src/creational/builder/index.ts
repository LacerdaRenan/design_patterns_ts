import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/VeganDishBuilder";

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

mainDishBuilder.makeMeal().makeDessert().makeBevarage();
veganDishBuilder.makeMeal().makeDessert().makeBevarage();

console.log(`Refeição padrão:\n${ JSON.stringify(mainDishBuilder.getMeal()) }\nValor: ${ mainDishBuilder.getPrice() }\n`);
console.log(`Refeição padrão:\n${ JSON.stringify(veganDishBuilder.getMeal()) }\nValor: ${ veganDishBuilder.getPrice() }\n`);


console.log(mainDishBuilder.getMeal());
