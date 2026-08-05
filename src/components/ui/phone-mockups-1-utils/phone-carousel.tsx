import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageItem {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
}

interface PhoneCarouselProps {
  images: ImageItem[];
  autoPlayInterval?: number;
  className?: string;
}

export function PhoneCarousel({
  images,
  autoPlayInterval = 3500,
  className,
}: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    const timer = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, handleNext, images.length]);

  const slideVariants: Variants = {
    initial: (dir: "left" | "right") => ({
      x: dir === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={cn("relative flex flex-col items-center justify-center p-4", className)}>
      {/* Glow aura behind phone frame */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/10 rounded-[60px] blur-3xl opacity-70 animate-pulse pointer-events-none" />

      {/* Phone Container Mockup */}
      <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] rounded-[48px] bg-slate-950 p-3 shadow-2xl border-[6px] border-slate-800 ring-1 ring-slate-700/50 overflow-hidden flex flex-col group select-none">
        
        {/* Top Antenna Lines & Side Buttons Mockup */}
        <div className="absolute top-24 -left-[9px] w-[3px] h-8 bg-slate-700 rounded-l" />
        <div className="absolute top-36 -left-[9px] w-[3px] h-12 bg-slate-700 rounded-l" />
        <div className="absolute top-52 -left-[9px] w-[3px] h-12 bg-slate-700 rounded-l" />
        <div className="absolute top-36 -right-[9px] w-[3px] h-16 bg-slate-700 rounded-r" />

        {/* Screen Bezel & Container */}
        <div className="relative w-full h-full rounded-[40px] bg-black overflow-hidden flex flex-col justify-between border border-slate-800/80">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-slate-800/50">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/50 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900/60" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/50" />
          </div>

          {/* Status Bar */}
          <div className="relative z-20 w-full pt-2.5 px-6 flex justify-between items-center text-[10px] font-semibold text-white/80">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 rounded-[2px] border border-white/80 flex items-center justify-end p-[1px]">
                <div className="w-full h-full bg-white/80 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Screen Content Image Slider */}
          <div className="relative flex-1 w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay for readability of title */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                  {currentImage.title && (
                    <span className="font-bold text-sm tracking-wide text-white drop-shadow">
                      {currentImage.title}
                    </span>
                  )}
                  {currentImage.caption && (
                    <span className="text-xs text-white/80 mt-0.5 line-clamp-2">
                      {currentImage.caption}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Glass Reflection Highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

          {/* Inner Phone Control Overlay (Visible on Hover) */}
          <div className="absolute inset-0 z-30 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/75 transition-colors pointer-events-auto shadow-lg border border-white/10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/75 transition-colors pointer-events-auto shadow-lg border border-white/10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Home Bar */}
          <div className="relative z-20 w-full py-2 flex justify-center items-center">
            <div className="w-28 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* External Controls & Pagination */}
      <div className="mt-5 flex items-center gap-3 z-10 bg-surface-container-high/80 px-4 py-2 rounded-full backdrop-blur-md border border-outline-variant/30 shadow-md">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
          title={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <div className="flex items-center gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? "right" : "left");
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-on-surface-variant/30 hover:bg-on-surface-variant/60"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
