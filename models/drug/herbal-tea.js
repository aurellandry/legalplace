import { Drug } from "./drug.js";

export class HerbalTea extends Drug {
  update() {
    this.expiresIn--;

    if (this.benefit < 50) this.benefit++;
    if (this.expiresIn < 0 && this.benefit < 50) this.benefit++;
  }
}