import { useState, useEffect, useCallback } from "react";

const titles = [
  "Cloud Architect",
  "Engineering Leader",
  "DevOps Engineer",
  "AI Builder",
  "Team Empowerer",
];

export const useTypewriter = () => {
  const [text, setText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = titles[titleIdx];

    if (!isDeleting) {
      setText(current.substring(0, charIdx + 1));
      setCharIdx((c) => c + 1);
    } else {
      setText(current.substring(0, charIdx - 1));
      setCharIdx((c) => c - 1);
    }
  }, [titleIdx, charIdx, isDeleting]);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
      timeout = setTimeout(tick, 400);
      return () => clearTimeout(timeout);
    } else {
      timeout = setTimeout(tick, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, titleIdx, tick]);

  return text;
}
