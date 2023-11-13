import { ICustumer } from "../../interfaces/ICustumer";

export class IndividualCustumer implements ICustumer {
  public name: string;

  public constructor (name: string) {
    this.name = name;
  }
}