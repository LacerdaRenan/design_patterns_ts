import { MyDatabaseClassic } from './db/db_singleton'

const db = MyDatabaseClassic.getInstance();

db.addUser({ name: "Carlos", age: 7 });
db.addUser({ name: "Luiza", age: 8 });
db.addUser({ name: "Fernando", age: 9 });
db.addUser({ name: "Larissa", age: 10 });
db.addUser({ name: "Lucas", age: 11 });
db.addUser({ name: "Mariana", age: 12 });
db.addUser({ name: "Rafael", age: 13 });
db.addUser({ name: "Amanda", age: 14 });
db.addUser({ name: "Gustavo", age: 15 });
db.addUser({ name: "Isabela", age: 16 });
