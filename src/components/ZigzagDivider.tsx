type Props = {
  flip?: boolean;
  color?: string;
  className?: string;
};

const ZigzagDivider = ({
  flip = false,
  color = "#ffffff",
  className = "",
}: Props) => (
  <div
    className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}
    style={{ lineHeight: 0 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 140"
      className="w-full h-auto block scale-y-125 md:scale-y-150"
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        d="M0,140 L0,0 L40,70 L80,0 L120,70 L160,0 L200,70 L240,0 L280,70 L320,0 L360,70 L400,0 L440,70 L480,0 L520,70 L560,0 L600,70 L640,0 L680,70 L720,0 L760,70 L800,0 L840,70 L880,0 L920,70 L960,0 L1000,70 L1040,0 L1080,70 L1120,0 L1160,70 L1200,0 L1240,70 L1280,0 L1320,70 L1360,0 L1400,70 L1440,0 L1440,140 Z"
      />
    </svg>
  </div>
);

export default ZigzagDivider;
