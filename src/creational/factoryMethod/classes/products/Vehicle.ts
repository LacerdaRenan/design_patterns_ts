export abstract class Vehicle {
  private _model: string;
  private _colour: string;
  private _selfState: number = 0;
  protected _xPosition: number = 0;
  protected _yposition: number = 0;

  public constructor(colour: string, model: string) { 
    this._model = model;
    this._colour = colour; 
  }

  public abstract moveX(direction: number): void;
  public abstract moveY(direction: number): void;

  public turnOn(): void { 
    if (this._selfState == 0) {
      this._selfState = 1;
      console.log("Ligando Veículo..."); 
    }
    console.log("Veiculo já está ligado");
  }
  public turnOff(): void {
    if (this._selfState == 1) {
      this._selfState = 0;
      console.log("Desligando Veículo...");
    }
    console.log(" Veículo já está desligado");
  }

  public get model() : string {
    return this._model;
  }

  public get colour() : string {
    return this._colour; 
  }
  
}
