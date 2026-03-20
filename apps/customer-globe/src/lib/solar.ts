import SunCalc from "suncalc";

export interface SolarVector {
  x: number;
  y: number;
  z: number;
}

export interface SolarSnapshot {
  direction: SolarVector;
  daylightStrength: number;
  subsolar: {
    lat: number;
    lon: number;
  };
}

const DEG2RAD = Math.PI / 180;

function normalizeDegrees(value: number): number {
  const wrapped = value % 360;
  return wrapped < 0 ? wrapped + 360 : wrapped;
}

function normalizeLongitude(value: number): number {
  const wrapped = ((value + 180) % 360 + 360) % 360 - 180;
  return wrapped === -180 ? 180 : wrapped;
}

export function getSubsolarPoint(date: Date) {
  const julianDay = date.getTime() / 86400000 + 2440587.5;
  const centuries = (julianDay - 2451545) / 36525;
  const meanLongitude = normalizeDegrees(
    280.46646 + centuries * (36000.76983 + centuries * 0.0003032),
  );
  const meanAnomaly =
    357.52911 + centuries * (35999.05029 - 0.0001537 * centuries);
  const equationOfCenter =
    Math.sin(meanAnomaly * DEG2RAD) * (1.914602 - centuries * (0.004817 + 0.000014 * centuries)) +
    Math.sin(2 * meanAnomaly * DEG2RAD) * (0.019993 - 0.000101 * centuries) +
    Math.sin(3 * meanAnomaly * DEG2RAD) * 0.000289;
  const apparentLongitude =
    meanLongitude +
    equationOfCenter -
    0.00569 -
    0.00478 * Math.sin((125.04 - 1934.136 * centuries) * DEG2RAD);
  const obliquity =
    23 +
    (26 +
      ((21.448 -
        centuries * (46.815 + centuries * (0.00059 - centuries * 0.001813))) /
        60)) /
      60;
  const correctedObliquity =
    obliquity + 0.00256 * Math.cos((125.04 - 1934.136 * centuries) * DEG2RAD);
  const declination = Math.asin(
    Math.sin(correctedObliquity * DEG2RAD) * Math.sin(apparentLongitude * DEG2RAD),
  );
  const rightAscension = Math.atan2(
    Math.cos(correctedObliquity * DEG2RAD) * Math.sin(apparentLongitude * DEG2RAD),
    Math.cos(apparentLongitude * DEG2RAD),
  );
  const gmst = normalizeDegrees(
    280.46061837 +
      360.98564736629 * (julianDay - 2451545) +
      centuries * centuries * (0.000387933 - centuries / 38710000),
  );
  const subsolarLon = normalizeLongitude((rightAscension / DEG2RAD) - gmst);
  const subsolarLat = declination / DEG2RAD;
  return { lat: subsolarLat, lon: subsolarLon };
}

export function latLonToVector(lat: number, lon: number): SolarVector {
  const latitude = lat * DEG2RAD;
  const longitude = lon * DEG2RAD;
  return {
    x: Math.cos(latitude) * Math.sin(longitude),
    y: Math.sin(latitude),
    z: Math.cos(latitude) * Math.cos(longitude),
  };
}

export function getSolarSnapshot(date: Date): SolarSnapshot {
  const subsolar = getSubsolarPoint(date);
  const verification = SunCalc.getPosition(date, subsolar.lat, subsolar.lon);
  return {
    direction: latLonToVector(subsolar.lat, subsolar.lon),
    daylightStrength: Math.min(1.1, Math.max(0.86, Math.sin(verification.altitude))),
    subsolar,
  };
}
