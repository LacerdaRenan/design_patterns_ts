import { MyDatabaseClassic } from './db/db_singleton'

const db = MyDatabaseClassic.getInstance();

db.addUser({ name: "José", age: 1 });
db.addUser({ name: "Maria", age: 2 });
db.addUser({ name: "João", age: 3 });
db.addUser({ name: "Renan", age: 4 });
db.addUser({ name: "Ryan", age: 5 });
db.addUser({ name: "Ellen", age: 6 });
