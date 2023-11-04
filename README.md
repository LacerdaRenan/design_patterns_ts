# Design Patterns (GoF)

## Creational Design Patterns

Os padrões de projetos de criação são padrões que abstraem o processo de instanciação de objetos. Eles ajudam a tornar o sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atingem esse objetivo delegando tarefas para outros objetos.

Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são utilizadas. Além disso, ocultam o modo como instâncias são criadas e compostas. O foco é eliminar o conhecimento do cliente sobre o **QUE**, **COMO** e **QUANDO** está sendo criado e **QUEM** faz parte do processo de criação.

### Singleton
Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para a mesma.

* Geralmente usado para acessa a recursos compartilhados, como acesso a base de dados, interfaces gráficas, sistemas de arquivos, servidores de impressão, logger etc.

* Módulos de arquivos (imports) geralmente tem comportamento de singleton.

*  É importante para algumas classes ter uma, e apenas uma, instância. Por exemplo, embora possam existir muitas impressoras em um sistema, deveria haver somente um spooler de impressoras.

Pode-se utilizar Singleton quando uma classe precisa ter somente uma instância disponível em todo o programa, ou quando se está usando muitas variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação.

#### Vantagens
  * Acesso controlado à instância única.
  * É fácil permitir um numero maior de instâncias, caso seja necessário.
  * _lazy instantiation_ (Só é criado quando for usado).
  * Substitui variáveis globais.

#### Desvantagens
  * É mais difícil de testar.
  * Viola o princípio da responsabilidade única.
  * Requer outro tratamento em caso de concorrência.
  * _nosingleton_

### Builder

Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

* O padrão sugere a separação do código que cria e o código que usa o objeto.

* Trata da criação de objetos **muito complexos**.

* Permite a criação de um objeto em etapas.

* Permite method chaining.

* O objeto final pode variar de acordo com a necessidade.

* É um padrão complexo

Deve ser usado quando você deseja criar objetos complexos com várias opções de configuração, mas quer manter o código de criação desses objetos limpo e legível. Ele é útil quando um objeto tem muitos parâmetros opcionais ou quando a ordem em que esses parâmetros são fornecidos não é relevante. O padrão Builder ajuda a melhorar a legibilidade do código, tornando-o mais compreensível e evitando construtores com muitos argumentos.

### Vantagens
  * Separa criação de utilização.

  * O cliente não precisa criar objetos diretamente.

  * O mesmo código pode construir objetos diferentes.

  * Ajuda na aplicação dos princípios SRP e OCP.

### Desvantagens
  * O código final pode se tornar muito complexo.