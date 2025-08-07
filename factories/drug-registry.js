import { HerbalTea } from "../models/drug/herbal-tea";
import { Fervex } from "../models/drug/fervex";
import { MagicPill } from "../models/drug/magic-pill";
import { Dafalgan } from "../models/drug/dafalgan";

export const drugTypes = {
  "Fervex": Fervex,
  "Herbal Tea": HerbalTea,
  "Magic Pill": MagicPill,
  "Dafalgan": Dafalgan
};
