import { way } from "../_constants/birthday.constants";

export function MacBookNeo() {
  return (
    <svg
      viewBox="0 0 420 268"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label={`MacBook Neo in ${way.label}`}
    >
      <defs>
        <linearGradient id="neo-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={way.sky} />
          <stop offset="100%" stopColor={way.ground} />
        </linearGradient>
        <linearGradient id="neo-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={way.lid} />
          <stop offset="100%" stopColor={way.edge} />
        </linearGradient>
      </defs>

      {/* lid */}
      <rect
        x="64"
        y="14"
        width="292"
        height="188"
        rx="12"
        fill="url(#neo-lid)"
      />
      <rect
        x="64.5"
        y="14.5"
        width="291"
        height="187"
        rx="12"
        fill="none"
        stroke="#00000022"
      />

      {/* screen */}
      <rect x="77" y="27" width="266" height="162" rx="6" fill="#0A0A0B" />
      <rect
        x="83"
        y="33"
        width="254"
        height="150"
        rx="3"
        fill="url(#neo-wall)"
      />

      {/* menu bar */}
      <rect x="83" y="33" width="254" height="11" rx="3" fill="#00000033" />
      <rect x="90" y="36" width="26" height="5" rx="2" fill="#FFFFFF66" />
      <rect x="292" y="36" width="16" height="5" rx="2" fill="#FFFFFF55" />
      <rect x="313" y="36" width="18" height="5" rx="2" fill="#FFFFFF55" />

      {/* dock */}
      <rect x="146" y="163" width="128" height="15" rx="5" fill="#FFFFFF2E" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={153 + i * 24}
          y={166}
          width="17"
          height="9"
          rx="3"
          fill="#FFFFFF66"
        />
      ))}

      {/* camera */}
      <circle cx="210" cy="21" r="2" fill="#FFFFFF55" />

      {/* base */}
      <path d="M34 204 H386 L404 232 H16 Z" fill="url(#neo-lid)" />
      <path d="M34 204 H386 L404 232 H16 Z" fill="none" stroke="#00000022" />
      <rect x="176" y="204" width="68" height="6" rx="3" fill="#00000026" />
      <ellipse cx="210" cy="244" rx="176" ry="9" fill="#00000014" />
    </svg>
  );
}
