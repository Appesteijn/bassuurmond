type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  monochrome?: "light" | "dark";
};

// Brand colors (taken from the provided logo)
const GREEN = "#4FB23C";
const NAVY = "#1B3556";

export default function Logo({
  variant = "full",
  className = "",
  monochrome,
}: LogoProps) {
  const markColor = monochrome === "light" ? "#ffffff" : monochrome === "dark" ? NAVY : GREEN;
  const textColor = monochrome === "light" ? "#ffffff" : NAVY;

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Suurmond Technical Solutions"
        role="img"
      >
        <ChevronStack color={markColor} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 520 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Suurmond Technical Solutions"
      role="img"
    >
      <g transform="translate(0,10)">
        <ChevronStack color={markColor} />
      </g>
      <g transform="translate(125,0)" fill={textColor}>
        <text
          x="0"
          y="55"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="46"
          fontWeight="800"
          letterSpacing="2"
        >
          SUURMOND
        </text>
        <text
          x="0"
          y="95"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="24"
          fontWeight="500"
          letterSpacing="4"
        >
          TECHNICAL SOLUTIONS
        </text>
      </g>
    </svg>
  );
}

function ChevronStack({ color }: { color: string }) {
  return (
    <g fill={color}>
      {/* Upper chevron */}
      <polygon points="50,8 90,46 75,46 50,26 25,46 10,46" />
      {/* Lower chevron */}
      <polygon points="50,48 90,86 75,86 50,66 25,86 10,86" />
    </g>
  );
}
