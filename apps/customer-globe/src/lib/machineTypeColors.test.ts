import { describe, expect, test } from "vitest";
import { machineTypeColor } from "./machineTypeColors";

describe("machineTypeColor", () => {
  test("assigns distinct colors across the current machine type set", () => {
    const machineTypes = [
      "Dab-Dispenser Semi-Auto",
      "Dab-Jet",
      "Jet-Fueler 2.0",
      "Jet-Fueler 3.0",
      "Squish-E",
      "Squish-o-Matic 1000",
      "Vape-Jet 3.0",
      "Vape-Jet 4.0",
      "Vape-Jet 4.0 - Top Load Edition",
    ];

    const colors = machineTypes.map((machineType, index) => machineTypeColor(machineType, index));

    expect(new Set(colors).size).toBe(machineTypes.length);
  });
});
