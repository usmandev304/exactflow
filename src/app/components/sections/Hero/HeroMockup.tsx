'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HeroAnimation } from './HeroAnimation';

export const HeroMockup = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const MAX_OFFSET = 28;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = e.clientX / innerWidth - 0.5;
      const yRatio = e.clientY / innerHeight - 0.5;

      targetRef.current = {
        x: xRatio * MAX_OFFSET * 2,
        y: yRatio * MAX_OFFSET * 2,
      };

      if (rafRef.current === null) {
        const tick = () => {
          const dx = targetRef.current.x - currentRef.current.x;
          const dy = targetRef.current.y - currentRef.current.y;

          currentRef.current = {
            x: currentRef.current.x + dx * 0.12,
            y: currentRef.current.y + dy * 0.12,
          };

          setOffset({ x: currentRef.current.x, y: currentRef.current.y });

          if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            rafRef.current = null;
          }
        };
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full flex justify-center items-center lg:mb-50 xl:mb-3"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative z-10 w-full max-w-2xl  1aspect-[2444/1614] will-change-transform"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) rotateX(${-offset.y * 0.15}deg) rotateY(${offset.x * 0.15}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <HeroAnimation />
      </div>
    </div>
  );
};
