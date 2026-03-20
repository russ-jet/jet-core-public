import type { CSSProperties } from "react";
import { useMemo } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  twinkleDuration: number;
  twinkleDelay: number;
}

interface StarLayer {
  id: string;
  depth: number;
  scale: number;
  driftX: number;
  driftY: number;
  stars: Star[];
}

function createSeededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createLayer(seed: number, count: number, depth: number, scale: number, driftX: number, driftY: number): StarLayer {
  const random = createSeededRandom(seed);
  const palette = ["rgba(255,255,255,0.98)", "rgba(206,228,255,0.9)", "rgba(255,244,220,0.88)"];
  const stars = Array.from({ length: count }, () => ({
    x: random() * 100,
    y: random() * 100,
    size: 0.45 + random() * 1.8,
    opacity: 0.16 + random() * 0.58,
    color: palette[Math.floor(random() * palette.length)] || palette[0],
    twinkleDuration: 5 + random() * 10,
    twinkleDelay: random() * 6,
  }));

  return {
    id: `layer-${seed}`,
    depth,
    scale,
    driftX,
    driftY,
    stars,
  };
}

const STAR_LAYERS = [
  createLayer(11, 190, 0.24, 1.03, 18, 6),
  createLayer(29, 150, 0.54, 1.08, 30, 12),
  createLayer(47, 110, 0.82, 1.12, 42, 18),
];

export default function ConstellationField({ orbitLongitude = 0 }: { orbitLongitude?: number }) {
  const orbitShift = useMemo(() => {
    const normalized = ((orbitLongitude % 360) + 360) % 360;
    return (normalized - 180) / 180;
  }, [orbitLongitude]);

  return (
    <div
      className="constellation-field"
      style={{ "--orbit-shift": orbitShift.toFixed(4) } as CSSProperties}
      aria-hidden="true"
    >
      {STAR_LAYERS.map((layer) => (
        <div
          key={layer.id}
          className="starfield-layer"
          style={
            {
              "--star-depth": layer.depth,
              "--star-scale": layer.scale,
              "--star-drift-x": `${layer.driftX}px`,
              "--star-drift-y": `${layer.driftY}px`,
            } as CSSProperties
          }
        >
          {layer.stars.map((star, index) => (
            <span
              key={`${layer.id}-${index}`}
              className="starfield-star"
              style={
                {
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  background: star.color,
                  animationDuration: `${star.twinkleDuration.toFixed(2)}s`,
                  animationDelay: `${star.twinkleDelay.toFixed(2)}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
