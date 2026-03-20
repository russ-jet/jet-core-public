import { getSolarSnapshot, getSubsolarPoint, latLonToVector } from "./solar";

describe("solar helpers", () => {
  test("returns a deterministic subsolar point for a fixed clock", () => {
    const date = new Date("2026-03-18T12:00:00.000Z");
    const subsolar = getSubsolarPoint(date);

    expect(subsolar.lat).toBeCloseTo(-0.8, 0);
    expect(subsolar.lon).toBeCloseTo(1.7, 0);
  });

  test("returns a normalized daylight vector", () => {
    const snapshot = getSolarSnapshot(new Date("2026-03-18T12:00:00.000Z"));
    const magnitude = Math.sqrt(
      snapshot.direction.x ** 2 +
        snapshot.direction.y ** 2 +
        snapshot.direction.z ** 2,
    );

    expect(magnitude).toBeCloseTo(1, 5);
    expect(snapshot.daylightStrength).toBeGreaterThan(0.8);
  });

  test("maps latitude and longitude to a globe vector", () => {
    const vector = latLonToVector(0, 0);
    expect(vector.x).toBeCloseTo(0, 5);
    expect(vector.y).toBeCloseTo(0, 5);
    expect(vector.z).toBeCloseTo(1, 5);
  });
});
