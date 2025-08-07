import { Drug } from "../models/drug/drug.js";
import { HerbalTea } from "../models/drug/herbal-tea.js";
import { Fervex } from "../models/drug/fervex.js";
import { MagicPill } from "../models/drug/magic-pill.js";

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    switch (name) {
      case "Fervex":
        return new Fervex(name, expiresIn, benefit);
      case "Herbal Tea":
        return new HerbalTea(name, expiresIn, benefit);
      case "Magic Pill":
        return new MagicPill(name, expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}
