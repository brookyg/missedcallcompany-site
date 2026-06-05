export default function Logo({
  size = 40,
  variant = "dark",
}: {
  size?: number;
  variant?: "dark" | "light";
}) {
  const circleFill = variant === "dark" ? "#1E2A3E" : "#141C2B";
  const phoneFill = "#FAF6EE";
  const xStroke = variant === "dark" ? "#1E2A3E" : "#141C2B";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Missed Call Company logo"
      role="img"
    >
      <circle cx="26" cy="26" r="26" fill={circleFill} />
      <g transform="translate(13,13)">
        <path
          d="M4.2 10.8c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C8.39 21 1 13.61 1 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L4.2 10.8z"
          fill={phoneFill}
        />
      </g>
      <circle cx="38" cy="14" r="7" fill="#C8993A" />
      <line
        x1="35.5"
        y1="11.5"
        x2="40.5"
        y2="16.5"
        stroke={xStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="40.5"
        y1="11.5"
        x2="35.5"
        y2="16.5"
        stroke={xStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
