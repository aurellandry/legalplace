export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  update() {
    this.expiresIn--;
    this.benefit = Math.max(0, this.benefit - this.getDegradationRate());
  }

  getDegradationRate() {
    const degradationRate = 1;

    return this.expiresIn < 0 ? degradationRate * 2 : degradationRate;
  }
}