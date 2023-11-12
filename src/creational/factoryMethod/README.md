# Factory Method

## Situação Hipotética de Uso

Vamos supor que esteja sendo desenvolvendo um sistema de gerenciamento de veículos e precise lidar com a criação de diferentes tipos de veículos, como carros e motocicletas.

Pode-se definir uma classe abstrata [Veiculo](./classes/products/Vehicle.ts) que representa um veículo e possui métodos e atributos comuns de um veículo, como andar e ligar ou desligar ou a cor e o modelo do veículo

Agora, deseja-se criar diferentes tipos de veículos, como [Carro](./classes/products/Car.ts) e [Motocicleta](./classes/products/Motocicle.ts), que herdam da classe base Veiculo. No entanto, não é desejado que a lógica de criação desses objetos esteja diretamente na classe cliente. É aqui que o Factory Method pode ser útil.

Seguindo o modelo:
![uml](/img/factory-method.png)

Podemos criar a classe abstrata [Creator](./classes/factories/Creator.ts) que deverá ter a inscrição do método de criação do veículo.

Em seguida, criamos as classes [CarCreator](./classes/factories/CarCreator.ts) e [MotocicleCreator](./classes/factories/MotocicleCreator.ts) que irão implementar de fato o método de criação de cada veículo específico e retornar o veículo pronto.

Em seguida, podemos [realizar um teste](./index.ts) em um código cliente e verificar o funcionamento do pradrão.



