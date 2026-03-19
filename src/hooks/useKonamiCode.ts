import { useState, useEffect, useCallback } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export const useKonamiCode = () => {
  const [isActive, setIsActive] = useState(false);
  const [seqIndex, setSeqIndex] = useState(0);

  const dismiss = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isActive) {
        setIsActive(false);
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI_SEQUENCE[seqIndex]) {
        const next = seqIndex + 1;
        if (next === KONAMI_SEQUENCE.length) {
          setIsActive(true);
          setSeqIndex(0);
        } else {
          setSeqIndex(next);
        }
      } else {
        setSeqIndex(0);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [seqIndex, isActive]);

  return { isActive, dismiss };
}
