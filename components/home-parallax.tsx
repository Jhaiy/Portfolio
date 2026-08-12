"use client";

import { Children, useEffect, useMemo, useRef, useState } from "react";

type HomeParallaxProps = {
  children: React.ReactNode;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HomeParallax({ children }: HomeParallaxProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const revealedProgressRef = useRef<number[]>([]);
  const [styles, setStyles] = useState(() =>
    items.map(() => ({ opacity: 0.06, scale: 0.82 })),
  );

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
    revealedProgressRef.current = items.map(() => 0);
    setStyles(items.map(() => ({ opacity: 0.06, scale: 0.82 })));
  }, [items.length]);

  useEffect(() => {
    let frameId = 0;

    const updateStyles = () => {
      cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame(() => {
        const fadeWindow = window.innerHeight * 0.45;

        setStyles(() =>
          itemRefs.current.map((element, index) => {
            const currentProgress = revealedProgressRef.current[index] ?? 0;

            if (!element) {
              return {
                opacity: 0.06 + currentProgress * 0.94,
                scale: 0.82 + currentProgress * 0.18,
              };
            }

            const rect = element.getBoundingClientRect();
            const entryProgress = clamp(
              (window.innerHeight - rect.top) / fadeWindow,
              0,
              1,
            );
            const nextProgress = Math.max(currentProgress, entryProgress);

            revealedProgressRef.current[index] = nextProgress;

            return {
              opacity: 0.06 + nextProgress * 0.94,
              scale: 0.82 + nextProgress * 0.18,
            };
          }),
        );
      });
    };

    updateStyles();

    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateStyles);
      window.removeEventListener("resize", updateStyles);
    };
  }, []);

  return (
    <div className="lg:m-45 sm:m-20 m-10 flex flex-col lg:gap-50 sm:gap-30 gap-30">
      {items.map((child, index) => {
        const currentStyle = styles[index] ?? { opacity: 1, scale: 1 };

        return (
          <div
            key={index}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            style={{
              opacity: currentStyle.opacity,
              transform: `scale(${currentStyle.scale})`,
              transformOrigin: "center center",
              transition: "transform 160ms ease-out, opacity 160ms ease-out",
              willChange: "transform, opacity",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
