import { motion } from "framer-motion";
import { GIFT } from "../_constants/birthday.constants";

export function GiftBox({
  onOpen,
  reduced,
}: {
  onOpen: () => void;
  reduced: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${GIFT.recipient}'s present`}
      className="group relative block cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-(--pink) focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg)"
      animate={
        reduced ? undefined : { y: [0, -10, 0], rotate: [-1.2, 1.2, -1.2] }
      }
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={reduced ? undefined : { scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg
        viewBox="0 0 240 232"
        className="h-auto w-56 sm:w-64"
        aria-hidden="true"
      >
        {/* body */}
        <rect x="30" y="78" width="180" height="140" fill="var(--pink)" />
        <rect
          x="30"
          y="78"
          width="180"
          height="140"
          fill="none"
          stroke="#00000026"
        />
        {/* vertical ribbon */}
        <rect
          x="106"
          y="78"
          width="28"
          height="140"
          fill="var(--ink)"
          opacity="0.92"
        />
        {/* lid */}
        <g className="origin-bottom transition-transform duration-300 group-hover:-translate-y-1.5">
          <rect x="18" y="48" width="204" height="34" fill="var(--pink)" />
          <rect
            x="18"
            y="48"
            width="204"
            height="34"
            fill="none"
            stroke="#00000026"
          />
          <rect
            x="106"
            y="48"
            width="28"
            height="34"
            fill="var(--ink)"
            opacity="0.92"
          />
          {/* bow */}
          <path d="M120 48 L84 20 L84 46 Z" fill="var(--ink)" opacity="0.92" />
          <path
            d="M120 48 L156 20 L156 46 Z"
            fill="var(--ink)"
            opacity="0.92"
          />
        </g>
      </svg>
    </motion.button>
  );
}
