import { CarCreator } from "./classes/factories/CarCreator";
import { MotocicleCreator } from "./classes/factories/MotocicleCreator";

// Crio uma instância da minha fábrica concreta
const carFactory = new CarCreator();
const motocicleFactory = new MotocicleCreator();

// Crio um novo objeto vehicle a partir da fábrica
const gol = carFactory.getVehicle("gol", "vermelho");
const polo = carFactory.getVehicle("polo", "cinza");
const xj6 = motocicleFactory.getVehicle("xj6", "branco");
const cb1000 = motocicleFactory.getVehicle("cb1000", "preto");

gol.moveX(1);
gol.moveY(0);

polo.moveX(1);
polo.moveY(0);

xj6.moveX(1);
xj6.moveY(0);

cb1000.moveX(1);
cb1000.moveY(0);
