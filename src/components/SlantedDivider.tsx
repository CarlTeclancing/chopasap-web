type Props = {
  flip?: boolean;
  color?: string;
  className?: string;
};

const SlantedDivider = ({
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
      viewBox="0 0 1440 60"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path fill={color} d="M0,60 L0,0 L1440,60 L1440,60 Z" />
    </svg>
  </div>
);

export default SlantedDivider;
