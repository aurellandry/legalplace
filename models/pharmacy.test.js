import { Drug } from "./drug/drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});

it("should increase benefit for Herbal Tea", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 5, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", 4, 11)]
  );
});

it("should increase benefit by 2 after expiration for Herbal Tea", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -1, 12)]
  );
});

it("should increase benefit by 1 when more than 10 days for Fervex", () => {
  expect(new Pharmacy([new Drug("Fervex", 15, 20)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 14, 21)]
  );
});

it("should increase benefit by 2 when 10 >= expiresIn > 5 for Fervex", () => {
  expect(new Pharmacy([new Drug("Fervex", 10, 20)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 9, 22)]
  );
});

it("should increase benefit by 3 when 5 >= expiresIn >= 1 for Fervex", () => {
  expect(new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 4, 23)]
  );
});

it("should drop benefit to 0 after expiration for Fervex", () => {
  expect(new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", -1, 0)]
  );
});

it("should not change benefit or expiresIn for Magic Pill", () => {
  expect(new Pharmacy([new Drug("Magic Pill", 10, 40)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 10, 40)]
  );
});

it("should never increase benefit above 50", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", 4, 50)]
  );
});

it("should never have benefit below 0", () => {
  expect(new Pharmacy([new Drug("test", 5, 0)]).updateBenefitValue()).toEqual(
    [new Drug("test", 4, 0)]
  );
});
