import { Drug } from "../models/drug/drug";
import { HerbalTea } from "../models/drug/herbal-tea";
import { Fervex } from "../models/drug/fervex";
import { MagicPill } from "../models/drug/magic-pill";
import { Dafalgan } from "../models/drug/dafalgan";

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    switch (name) {
      case "Fervex":
        return new Fervex(name, expiresIn, benefit);
      case "Herbal Tea":
        return new HerbalTea(name, expiresIn, benefit);
      case "Magic Pill":
        return new MagicPill(name, expiresIn, benefit);
      case "Dafalgan":
        return new Dafalgan(name, expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}
