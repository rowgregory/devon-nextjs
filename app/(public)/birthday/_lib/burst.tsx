export const BURST = Array.from({ length: 44 }, (_, i) => {
  const ring = i % 2;
  const step = Math.floor(i / 2);
  const angle =
    (step / 22) * Math.PI * 2 + (ring ? 0.09 : 0) + (step % 2 ? 0.05 : 0);
  const dist = ring ? 150 + (i % 4) * 46 : 280 + (i % 5) * 70;

  return {
    id: i,
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    spin: (i % 2 ? 1 : -1) * (200 + (i % 3) * 110),
    size: i % 4 === 0 ? 30 : i % 4 === 1 ? 22 : i % 4 === 2 ? 15 : 10,
    delay: (i % 5) * 0.025,
  };
});
