const PALETTE = [
  "#39FF42",
  "#FBB318",
  "#1BE7C7",
  "#53B3FF",
  "#FF7B54",
  "#D8FF5D",
  "#FF5D8F",
  "#B794F4",
  "#F4D35E",
  "#FF9FF3",
  "#7AE582",
  "#6FFFE9",
];

export function machineTypeColor(_machineType: string, index: number): string {
  if (index < PALETTE.length) {
    return PALETTE[index];
  }

  const hue = Math.round((index * 137.508) % 360);
  return `hsl(${hue} 85% 64%)`;
}
