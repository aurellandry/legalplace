export class DrugInputValidator {
  static validate({ name, expiresIn, benefit }) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid drug name");
    }

    if (!Number.isInteger(expiresIn)) {
      throw new Error("'expiresIn' must be an integer");
    }

    if (!Number.isInteger(benefit) || benefit < 0 || benefit > 50) {
      throw new Error("'benefit' must be an integer between 0 and 50");
    }
  }
}
