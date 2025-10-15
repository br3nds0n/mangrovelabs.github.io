export function MangroveIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        {/* Left antenna */}
        <ellipse
          cx="14"
          cy="12"
          rx="3"
          ry="6"
          fill="currentColor"
          transform="rotate(-15 14 12)"
        />
        {/* Right antenna */}
        <ellipse
          cx="34"
          cy="12"
          rx="3"
          ry="6"
          fill="currentColor"
          transform="rotate(15 34 12)"
        />
        {/* Body/shell */}
        <ellipse cx="24" cy="26" rx="18" ry="10" fill="currentColor" />
        {/* Eyes */}
        <circle cx="18" cy="24" r="2" fill="currentColor" />
        <circle cx="30" cy="24" r="2" fill="currentColor" />
        {/* Left leg connectors */}
        <rect
          x="8"
          y="28"
          width="3"
          height="8"
          fill="currentColor"
          transform="rotate(-25 8 28)"
        />
        {/* Right leg connectors */}
        <rect
          x="37"
          y="28"
          width="3"
          height="8"
          fill="currentColor"
          transform="rotate(25 37 28)"
        />
      </g>
    </svg>
  );
}
