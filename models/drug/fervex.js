import { Drug } from "./drug.js";

export class Fervex extends Drug {
  update() {
    this.expiresIn--;

    if (this.expiresIn < 0) {
      this.benefit = 0;
    } else if (this.expiresIn < 5) {
      this.benefit = Math.min(50, this.benefit + 3);
    } else if (this.expiresIn < 10) {
      this.benefit = Math.min(50, this.benefit + 2);
    } else {
      this.benefit = Math.min(50, this.benefit + 1);
    }
  }
}