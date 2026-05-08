'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface HeroAnimationProps {
  src?: string;
  className?: string;
}

export const HeroAnimation = ({
  src = '/animations/hero.json',
  className = 'w-full h-full',
}: HeroAnimationProps) => {
  const [data, setData] = useState<unknown | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load ${src}`);
        return r.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  // if (error || !data) {
  //   return (
  //     <div
  //       className={`${className} bg-gradient-to-br from-sky-100 via-white to-pink-100 flex items-center justify-center text-gray-400 text-sm`}
  //     >
  //       {error ? 'Animation unavailable' : 'Loading…'}
  //     </div>
  //   );
  // }

  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      className={className}
      rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
    />
  );
};
