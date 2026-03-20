import { useState, useCallback } from "react";

export const useCarousel = (totalItems: number, visibleCount: number) => {
  const maxIndex = Math.max(0, totalItems - visibleCount);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));
    },
    [maxIndex],
  );

  return {
    currentIndex,
    prev,
    next,
    goTo,
    canPrev: currentIndex > 0,
    canNext: currentIndex < maxIndex,
    totalDots: maxIndex + 1,
  };
};
