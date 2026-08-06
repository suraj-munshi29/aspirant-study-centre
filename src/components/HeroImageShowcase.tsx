import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BatchImage {
  src: string;
  alt: string;
}

const BATCH_IMAGES: BatchImage[] = [
  { src: "/Batch (1).jpeg", alt: "Classroom Batch Session" },
  { src: "/Batch (3).jpeg", alt: "Interactive Lecture and Mentorship" },
  { src: "/Batch (5).jpeg", alt: "Educational Field Visit" },
  { src: "/Batch (6).jpeg", alt: "Outdoor Group Study Circle" },
  { src: "/Batch (7).jpeg", alt: "Heritage Site Learning Trip" },

];

// ─── Desktop: Stacked rotating cards with depth ─────────────────────────────

function DesktopShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 3.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BATCH_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
    // resume auto-rotate after 6s of inactivity
    setTimeout(() => setIsPaused(false), 6000);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow behind the stack */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[380px] h-[260px] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Card stack */}
      <div
        className="relative w-full max-w-[520px] aspect-[16/10]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="popLayout">
          {BATCH_IMAGES.map((img, i) => {
            const offset = (i - activeIndex + BATCH_IMAGES.length) % BATCH_IMAGES.length;
            // only render the top 4 cards for performance
            if (offset > 3) return null;

            const isActive = offset === 0;
            const zIndex = BATCH_IMAGES.length - offset;
            // each card behind is shifted down-right and scaled smaller
            const translateY = offset * 14;
            const translateX = offset * 10;
            const scale = 1 - offset * 0.05;
            const rotate = offset * 2.5;
            const cardOpacity = offset <= 3 ? 1 - offset * 0.12 : 0;

            return (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 50, rotate: 5 }}
                animate={{
                  opacity: cardOpacity,
                  scale,
                  y: translateY,
                  x: translateX,
                  rotate,
                  zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8, y: -30, rotate: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                onClick={() => !isActive && goTo(i)}
                className={`absolute inset-0 rounded-2xl overflow-hidden border-2 shadow-2xl cursor-pointer
                  ${isActive
                    ? "border-cyan-400/60 shadow-[0_8px_40px_rgba(56,189,248,0.25)]"
                    : "border-slate-600/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  }`}
                style={{ zIndex }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover object-center"
                />


              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {BATCH_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View batch image ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === activeIndex
                ? "w-7 h-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                : "w-2.5 h-2.5 bg-slate-500/60 hover:bg-slate-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Mobile: Full-width swipeable carousel ──────────────────────────────────

function MobileShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BATCH_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-8">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-cyan-500/15 rounded-full blur-[70px] pointer-events-none"
      />

      {/* Main carousel viewport */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full"
          >
            {/* Image container with natural aspect ratio */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-slate-900">
              <img
                src={BATCH_IMAGES[activeIndex].src}
                alt={BATCH_IMAGES[activeIndex].alt}
                loading="eager"
                className="w-full h-auto object-contain"
              />

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {BATCH_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View batch image ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === activeIndex
                ? "w-6 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                : "w-2 h-2 bg-slate-500/60 hover:bg-slate-400"
              }`}
          />
        ))}
      </div>


    </div>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────

export default function HeroImageShowcase() {
  return (
    <>
      {/* Desktop view (lg+) */}
      <div className="hidden lg:flex w-full h-full items-center justify-center relative">
        <DesktopShowcase />
      </div>

      {/* Mobile / Tablet view */}
      <div className="lg:hidden relative">
        <MobileShowcase />
      </div>
    </>
  );
}
