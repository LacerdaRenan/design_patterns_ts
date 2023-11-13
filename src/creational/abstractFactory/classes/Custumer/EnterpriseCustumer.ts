import { ICustumer } from "../../interfaces/ICustumer";

export class EnterpriseCustumer implements ICustumer {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}
