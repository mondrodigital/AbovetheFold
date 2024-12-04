export const getCardStyles = (
  relativeIndex: number,
  totalItems: number
): React.CSSProperties => {
  const yOffset = relativeIndex * 60;
  const zOffset = -Math.abs(relativeIndex) * 100;
  const rotateX = relativeIndex * 30;
  const scale = Math.max(0.7, 1 - Math.abs(relativeIndex) * 0.15);
  const opacity = Math.max(0, 1 - Math.abs(relativeIndex) * 0.5);

  return {
    transform: `translateY(${yOffset}px) translateZ(${zOffset}px) rotateX(${rotateX}deg) scale(${scale})`,
    opacity,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 100 - Math.abs(relativeIndex),
    willChange: 'transform, opacity',
  };
};