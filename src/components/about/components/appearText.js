import React, { useRef, useState, useLayoutEffect } from "react";
import AppearLetter from "./appearLetter";

const AppearText = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.1,
  keyLetterIndex = 0,
  keyRef,
  yOffset = 100
}) => {
  const letters = text.split("");
  const letterRefs = useRef([]);
  const [deltas, setDeltas] = useState([]);

  // Compute fly‑out deltas once
  useLayoutEffect(() => {
    if (!keyRef.current) return;
    const keyRect = keyRef.current.getBoundingClientRect();
    const newDeltas = letters.map((_, idx) => {
      if (idx === keyLetterIndex) return { dx: 0, dy: 0 };
      const el = letterRefs.current[idx];
      if (!el) return { dx: 0, dy: 0 };
      const r = el.getBoundingClientRect();
      return {
        dx: (keyRect.left + keyRect.width/2) - (r.left + r.width/2),
        dy:
          (keyRect.top + keyRect.height/2) -
          (r.top + r.height/2)
      };
    });
    setDeltas(newDeltas);
  }, []); // run only once

  return (
    <span
      className={className}
      style={{ position: "relative", transform: `translateY(-${yOffset}px)` }}
    >
      {letters.map((letter, idx) => {
        if (letter === " ") {
          return (
            <span key={idx} style={{ display: "inline-block", width: "0.5em" }}>
              &nbsp;
            </span>
          );
        }
        // skip rendering the key letter—it's already in place
        if (idx === keyLetterIndex) {
          return null;
        }
        return (
          <AppearLetter
            key={idx}
            ref={el => (letterRefs.current[idx] = el)}
            letter={letter}
            delay={delay + idx * stagger}
            appearDx={deltas[idx]?.dx || 0}
            appearDy={deltas[idx]?.dy || 0}
          />
        );
      })}
    </span>
  );
};

export default AppearText;
