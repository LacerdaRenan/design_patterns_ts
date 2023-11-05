import { Person } from "./prototype1/prototype1";

const person1 = new Person('Renan', 23);

const person2 = person1.clone();

console.log(person2);