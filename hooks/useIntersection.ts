import { useState, useEffect } from "react";

export const useIntersection = (
  element: React.RefObject<HTMLDivElement>,
  rootMargin: string
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
        }
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.unobserve(element.current as Element);
  }, [element, rootMargin]);

  return isVisible;
};
