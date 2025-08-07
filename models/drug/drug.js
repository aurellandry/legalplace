export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  update() {
    this.expiresIn--;
    this.benefit = Math.max(0, this.benefit - 1);

    if (this.expiresIn < 0) {
      this.benefit = Math.max(0, this.benefit - 1);
    }
  }
}