import { DrugFactory } from "../factories/drug-factory.js";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs.map(drug => 
      DrugFactory.createDrug(drug.name, drug.expiresIn, drug.benefit)
    );
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => drug.update());

    return this.drugs;
  }
}