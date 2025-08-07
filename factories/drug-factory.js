import { Drug } from "../models/drug/drug";
import { drugTypes } from "./drug-registry";
import { DrugInputValidator } from "../validators/drug-input-validator";

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
		DrugInputValidator.validate({ name, expiresIn, benefit });
		
    const DrugClass = drugTypes[name] || Drug;
		
    return new DrugClass(name, expiresIn, benefit);
  }
}
