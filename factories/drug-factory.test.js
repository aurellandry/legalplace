import { DrugFactory } from "./drug-factory.js";
import { Drug } from "../models/drug/drug.js";
import { HerbalTea } from "../models/drug/herbal-tea.js";
import { Fervex } from "../models/drug/fervex.js";
import { MagicPill } from "../models/drug/magic-pill.js";
import { Dafalgan } from "../models/drug/dafalgan.js";

describe("DrugFactory", () => {
  it("should create a regular Drug for unknown drug names", () => {
		const drug = DrugFactory.createDrug("Doliprane", 10, 20);
		
		expect(drug).toBeInstanceOf(Drug);
		expect(drug.name).toBe("Doliprane");
		expect(drug.expiresIn).toBe(10);
		expect(drug.benefit).toBe(20);
	});

	it("should create a HerbalTea instance for 'Herbal Tea'", () => {
		const drug = DrugFactory.createDrug("Herbal Tea", 5, 15);
		
		expect(drug).toBeInstanceOf(HerbalTea);
		expect(drug.name).toBe("Herbal Tea");
		expect(drug.expiresIn).toBe(5);
		expect(drug.benefit).toBe(15);
	});

	it("should create a Fervex instance for 'Fervex'", () => {
		const drug = DrugFactory.createDrug("Fervex", 8, 25);
		
		expect(drug).toBeInstanceOf(Fervex);
		expect(drug.name).toBe("Fervex");
		expect(drug.expiresIn).toBe(8);
		expect(drug.benefit).toBe(25);
	});

	it("should create a MagicPill instance for 'Magic Pill'", () => {
		const drug = DrugFactory.createDrug("Magic Pill", 15, 40);
		
		expect(drug).toBeInstanceOf(MagicPill);
		expect(drug.name).toBe("Magic Pill");
		expect(drug.expiresIn).toBe(15);
		expect(drug.benefit).toBe(40);
	});

	it("should create a Dafalgan instance for 'Dafalgan'", () => {
		const drug = DrugFactory.createDrug("Dafalgan", 5, 15);
		
		expect(drug).toBeInstanceOf(Dafalgan);
		expect(drug.name).toBe("Dafalgan");
		expect(drug.expiresIn).toBe(5);
		expect(drug.benefit).toBe(15);
	});
});
