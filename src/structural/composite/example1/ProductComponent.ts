export abstract class ProductComponent {
  abstract getPrice(): number;
  abstract getProduct(): ProductComponent[];
  public add(product: ProductComponent[]) { }
  public remove(product: ProductComponent) { }
}

export class ProductLeaf extends ProductComponent {
  public constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getProduct(): ProductComponent[] {
    return [this];
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] =[];

  public add(product: ProductComponent[]): void {
    this.children.push(...product);
  }

  public remove(product: ProductComponent): void {
    const indexOfProduct = this.children.indexOf(product);  
    if (indexOfProduct!==-1) this.children.splice(indexOfProduct, 1);
  }

  public getProduct(): ProductComponent[] {
    let products: ProductComponent[] = [];
    this.children.forEach(product => products.push(...product.getProduct()));
    return products;
  }

  public getPrice(): number {
    let price = 0;
    this.children.forEach(product => price += product.getPrice());
    return price;
  }
}

// client
const celular = new ProductLeaf("celular", 1000);
const computador = new ProductLeaf("computador", 5000);
const headset = new ProductLeaf("fone", 300);
const mouse = new ProductLeaf("mouse", 50);
const teclado = new ProductLeaf("teclado", 80);
const monitor = new ProductLeaf("monitor", 300);
const impressora = new ProductLeaf("impressora", 200);
const tablet = new ProductLeaf("tablet", 600);
const smartwatch = new ProductLeaf("smartwatch", 150);
const camera = new ProductLeaf("câmera", 400);
const roteador = new ProductLeaf("roteador", 80);
const altofalante = new ProductLeaf("alto-falante", 120);
const carregador = new ProductLeaf("carregador", 20);

const carrinhoDeCompras1 = new ProductComposite();
carrinhoDeCompras1.add([celular, computador, headset, mouse]);

const carrinhoDeCompras2 = new ProductComposite();
carrinhoDeCompras2.add([teclado, monitor, impressora, tablet]);

const carrinhoDeCompras3 = new ProductComposite();
carrinhoDeCompras3.add([smartwatch, camera, roteador, altofalante, carregador]);

carrinhoDeCompras2.add([carrinhoDeCompras3]);
carrinhoDeCompras1.add([carrinhoDeCompras2]);

console.log(carrinhoDeCompras1.getPrice());
console.log(carrinhoDeCompras1.getProduct());
