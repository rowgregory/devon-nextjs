"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GIFT, SPECS, SUMMARY, way } from "./_constants/birthday.constants";
import { GiftBox } from "./_components/GiftBox";
import { BURST } from "./_lib/burst";
import { MacBookNeo } from "./_components/MacbookNeo";

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, easing: [0.16, 1, 0.3, 1] },
  },
};

export default function BirthdayClient() {
  const [opened, setOpened] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setOpened(true);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.85;
      audio.play().catch(() => {});
    }
  };
  const reduced = useReducedMotion() ?? false;

  const ease = [0.16, 1, 0.3, 1] as const;
  const stage = (d: number) => (reduced ? 0 : d);

  return (
    <main className="relative min-h-dvh w-full bg-(--bg) text-(--ink) [--bg:#FFFFFF] [--ink:#0B0B0C] [--line:#E6E1DC] [--muted:#6E6A67] [--pink:#FF1F7D] [--surface:#F7F5F3] dark:[--bg:#0A0A0B] dark:[--ink:#F4F4F5] dark:[--line:#26262A] dark:[--muted:#9B9BA3] dark:[--surface:#131315]">
      <audio ref={audioRef} src="/sounds/birthday.mp3" preload="auto" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-site flex-col items-center justify-center px-5 py-16 sm:px-8">
        {opened && origin && !reduced && (
          <div
            className="pointer-events-none fixed z-20"
            style={{ left: origin.x, top: origin.y }}
            aria-hidden="true"
          >
            {BURST.map((p) => (
              <motion.span
                key={p.id}
                className="absolute block"
                style={{
                  width: p.size,
                  height: p.size,
                  marginLeft: -p.size / 2,
                  marginTop: -p.size / 2,
                  backgroundColor:
                    p.id % 3 === 0 ? "var(--ink)" : "var(--pink)",
                }}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                animate={{
                  x: p.x,
                  y: p.y,
                  opacity: 0,
                  rotate: p.spin,
                  scale: 0.4,
                }}
                transition={{
                  duration: 0.9,
                  delay: p.delay,
                  ease: [0.2, 0.6, 0.3, 1],
                }}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {!opened ? (
            <motion.div
              key="closed"
              className="flex flex-col items-center gap-10 text-center"
              exit={{
                opacity: 0,
                scale: 0.7,
                rotate: -6,
                transition: { duration: reduced ? 0 : 0.32, ease },
              }}
            >
              <motion.p
                className="font-mono text-[11px] tracking-[0.12em] text-(--muted) lowercase"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.5, ease }}
              >
                $ sqysh deliver --to={GIFT.recipient.toLowerCase()}
              </motion.p>

              <div ref={boxRef}>
                <GiftBox onOpen={handleOpen} reduced={reduced} />
              </div>

              <motion.p
                className="font-mono text-[11px] tracking-[0.12em] text-(--muted) lowercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: reduced ? 1 : [0.35, 1, 0.35] }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                tap to run
              </motion.p>
            </motion.div>
          ) : (
            <motion.div key="open" className="w-full">
              {/* laptop: outer springs in, inner keeps a slow idle float */}
              <motion.div
                className="flex justify-center"
                initial={{ y: 120, scale: 0.62, opacity: 0, rotate: -8 }}
                animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        delay: 0.22,
                        type: "spring",
                        stiffness: 140,
                        damping: 14,
                        mass: 0.9,
                      }
                }
              >
                <motion.div
                  animate={reduced ? undefined : { y: [0, -9, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.1,
                  }}
                >
                  <MacBookNeo />
                </motion.div>
              </motion.div>

              {/* listing sheet */}
              <motion.div
                className="mx-auto mt-14 w-full max-w-3xl border border-(--line) bg-surface"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: stage(0.55),
                  duration: reduced ? 0 : 0.65,
                  ease,
                }}
              >
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-(--line) px-6 py-6 sm:px-8">
                  <div>
                    <motion.p
                      className="font-mono text-[11px] tracking-[0.28em] text-(--pink) uppercase"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: stage(0.72),
                        duration: reduced ? 0 : 0.4,
                        ease,
                      }}
                    >
                      just listed
                    </motion.p>

                    <motion.h1
                      className="mt-2 text-4xl font-black tracking-tight sm:text-5xl"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: stage(0.8),
                        duration: reduced ? 0 : 0.5,
                        ease,
                      }}
                    >
                      MacBook Neo
                    </motion.h1>

                    <motion.p
                      className="mt-1 text-sm text-(--muted)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: stage(0.92),
                        duration: reduced ? 0 : 0.4,
                      }}
                    >
                      13-inch · {way.label} · {GIFT.storage}
                    </motion.p>
                  </div>

                  {/* stamp: slams down like it's being pressed onto the sheet */}
                  <motion.span
                    className="inline-block origin-center bg-(--pink) px-3 py-1.5 font-mono text-[11px] tracking-[0.22em] text-white uppercase"
                    initial={{ opacity: 0, scale: 2.6, rotate: -16 }}
                    animate={{ opacity: 1, scale: 1, rotate: -3 }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : {
                            delay: 1.05,
                            type: "spring",
                            stiffness: 460,
                            damping: 18,
                          }
                    }
                  >
                    sold to {GIFT.recipient}
                  </motion.span>
                </div>

                {/* summary cells stagger left to right */}
                <dl className="grid grid-cols-2 border-b border-(--line) sm:grid-cols-4">
                  {SUMMARY.map((row, i) => (
                    <motion.div
                      key={row.label}
                      className={`px-6 py-5 sm:px-8 ${i < SUMMARY.length - 1 ? "border-(--line) sm:border-r" : ""} ${
                        i % 2 === 0
                          ? "border-r border-(--line) sm:border-r"
                          : ""
                      }`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: stage(1.15 + i * 0.07),
                        duration: reduced ? 0 : 0.45,
                        ease,
                      }}
                    >
                      <dt className="font-mono text-[10px] tracking-[0.22em] text-(--muted) uppercase">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold">
                        {row.value}
                      </dd>
                    </motion.div>
                  ))}
                </dl>

                {/* features reveal on scroll, not on a timer — on a phone these
            sit well below the fold and a timed stagger plays to nobody */}
                <motion.div
                  className="px-6 py-7 sm:px-8"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: reduced ? 0 : 0.04 },
                    },
                  }}
                >
                  <motion.p
                    className="font-mono text-[10px] tracking-[0.22em] text-(--muted) uppercase"
                    variants={rowVariants}
                  >
                    features
                  </motion.p>

                  <dl className="mt-4 divide-y divide-(--line)">
                    {SPECS.map((row) => (
                      <motion.div
                        key={row.label}
                        className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6"
                        variants={rowVariants}
                      >
                        <dt className="w-44 shrink-0 font-mono text-[11px] tracking-[0.16em] text-(--muted) uppercase">
                          {row.label}
                        </dt>
                        <dd className="text-sm">{row.value}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </motion.div>

                {/* the pink rule draws itself across before the note lands */}
                <div className="relative bg-(--bg) px-6 py-7 sm:px-8">
                  <motion.div
                    className="absolute inset-x-0 top-0 h-1 origin-left bg-(--pink)"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: reduced ? 0 : 0.7, ease }}
                  />
                  <motion.p
                    className="font-mono text-[10px] tracking-[0.12em] text-(--muted) lowercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: stage(0.35),
                      duration: reduced ? 0 : 0.4,
                    }}
                  >
                    $ sqysh ship --gift
                  </motion.p>
                  <motion.p
                    className="mt-3 text-lg leading-relaxed font-medium lowercase"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: stage(0.5),
                      duration: reduced ? 0 : 0.55,
                      ease,
                    }}
                  >
                    happy birthday, {GIFT.recipient.toLowerCase()}. {GIFT.note}
                  </motion.p>
                </div>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => {
                  audioRef.current?.pause();
                  setOpened(false);
                  setOrigin(null);
                }}
                className="mx-auto mt-10 block cursor-pointer border border-(--line) px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] text-(--muted) lowercase transition-colors hover:border-(--pink) hover:text-(--pink) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--pink)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={reduced ? undefined : { scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                wrap it back up
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
