import { DrugInputValidator } from "./drug-input-validator";

describe("DrugInputValidator", () => {
  it("should throw for invalid name", () => {
    expect(() =>
      DrugInputValidator.validate({ name: "", expiresIn: 5, benefit: 10 })
    ).toThrow("Invalid drug name");
  });

  it("should throw for non-integer expiresIn", () => {
    expect(() =>
      DrugInputValidator.validate({ name: "Herbal Tea", expiresIn: "soon", benefit: 10 })
    ).toThrow("'expiresIn' must be an integer");
  });

  it("should throw for invalid benefit", () => {
    expect(() =>
      DrugInputValidator.validate({ name: "Herbal Tea", expiresIn: 5, benefit: 55 })
    ).toThrow("'benefit' must be an integer between 0 and 50");
  });

  it("should pass for valid inputs", () => {
    expect(() =>
      DrugInputValidator.validate({ name: "Herbal Tea", expiresIn: 5, benefit: 10 })
    ).not.toThrow();
  });
});
