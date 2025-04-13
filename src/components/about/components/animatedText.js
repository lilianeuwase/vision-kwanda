import React, { useRef, useState, useLayoutEffect } from "react";
import AnimatedLetter from "./animatedLetter";

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.3,
  secondaryDelay = 0.5,
  extraDelay = 0.5,
  collapse = false,
  keyLetterIndex,
  keyRef
}) => {
  const letters = text.split("");
  const letterRefs = useRef([]);
  const [deltas, setDeltas] = useState([]);

  // When collapse turns true, measure once and compute deltas
  useLayoutEffect(() => {
    if (!collapse) return;
    if (!keyRef.current) return;
    const keyRect = keyRef.current.getBoundingClientRect();

    const newDeltas = letterRefs.current.map(el => {
      if (!el) return { dx: 0, dy: 0 };
      const r = el.getBoundingClientRect();
      return {
        dx: (keyRect.left + keyRect.width / 2) - (r.left + r.width / 2),
        dy: (keyRect.top + keyRect.height / 2) - (r.top + r.height / 2)
      };
    });

    setDeltas(newDeltas);
  }, [collapse, keyRef]);

  return (
    <span className={className}>
      {letters.map((letter, idx) => {
        if (letter === " ") {
          return (
            <span
              key={idx}
              style={{ display: "inline-block", width: "0.5em" }}
            >
              &nbsp;
            </span>
          );
        }
        const isKey = idx === keyLetterIndex;
        return (
          <AnimatedLetter
            key={idx}
            ref={el => {
              letterRefs.current[idx] = el;
              if (isKey) keyRef.current = el;
            }}
            letter={letter}
            delay={delay + idx * stagger}
            secondaryDelay={secondaryDelay}
            extraDelay={extraDelay}
            collapse={collapse}
            isKey={isKey}
            collapseDx={deltas[idx]?.dx || 0}
            collapseDy={deltas[idx]?.dy || 0}
          />
        );
      })}
    </span>
  );
};

export default AnimatedText;
