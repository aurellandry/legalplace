import { Drug } from "./drug";

export class Dafalgan extends Drug {
  update() {
    this.expiresIn--;

    const degradation = this.getDegradationRate() * 2;
    this.benefit = Math.max(0, this.benefit - degradation);
  }
}