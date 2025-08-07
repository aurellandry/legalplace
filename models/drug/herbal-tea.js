import { Drug } from "./drug";

export class HerbalTea extends Drug {
  update() {
    this.expiresIn--;
    this.benefit = Math.min(50, this.benefit + this.getIncreaseRate());
  }

  getIncreaseRate() {
    const increaseRate = 1;

    return this.expiresIn < 0 ? increaseRate * 2 : increaseRate;
  }
}