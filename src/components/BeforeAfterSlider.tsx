import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

export function BeforeAfterSlider({ beforeImg, afterImg }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newPos = ((x - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(newPos, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-ew-resize select-none"
    >
      {/* After image (background) */}
      <img src={afterImg} className="absolute inset-0 w-full h-full object-cover" alt="After" />

      {/* Before image (overlay) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeImg} className="absolute inset-0 w-full h-full object-cover grayscale" alt="Before" />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center">
           <div className="flex gap-0.5">
             <div className="w-0.5 h-3 bg-brand-black/20" />
             <div className="w-0.5 h-3 bg-brand-black/20" />
           </div>
        </div>
      </div>

      <div className="absolute top-6 left-6 px-3 py-1 bg-brand-black/40 backdrop-blur-md rounded-full text-[10px] text-white uppercase tracking-widest font-bold">Before</div>
      <div className="absolute top-6 right-6 px-3 py-1 bg-brand-black/40 backdrop-blur-md rounded-full text-[10px] text-white uppercase tracking-widest font-bold">After</div>
    </div>
  );
}
