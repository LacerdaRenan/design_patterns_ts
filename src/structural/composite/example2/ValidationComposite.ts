// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
  public add(component: ValidationComponent[]): void { }
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  public validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value)
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private _children: ValidationComponent[] = [];

  public validate(value: unknown): boolean {
    for (let child of this._children) if (!child.validate(value)) return false;
    return true;
  }

  public add(component: ValidationComponent[]): void {
    this._children.push(...component);
  }
}


const emailValidation = new ValidateEmail();
const stringValidation = new ValidateString();
const numberValidation = new ValidateNumber();

const validationComposite = new ValidationComposite();

validationComposite.add([emailValidation, stringValidation]);

console.log(validationComposite.validate("string@"));

