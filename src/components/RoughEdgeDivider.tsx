type Props = {
  flip?: boolean;
  color?: string;
  className?: string;
};

const RoughEdgeDivider = ({
  flip = false,
  color = "#ffffff",
  className = "",
}: Props) => (
  <div
    className={`w-full overflow-hidden  ${flip ? "rotate-180" : ""} ${className}`}
    style={{ lineHeight: 0 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 100"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        d="M0,100 L0,20 Q15,18 30,22 Q45,26 60,20 Q75,14 90,25 Q105,36 120,28 Q135,20 150,30 Q165,40 180,32 Q195,24 210,35 Q225,46 240,38 Q255,30 270,42 Q285,54 300,44 Q315,34 330,46 Q345,58 360,48 Q375,38 390,50 Q405,62 420,52 Q435,42 450,54 Q465,66 480,56 Q495,46 510,58 Q525,70 540,60 Q555,50 570,62 Q585,74 600,64 Q615,54 630,66 Q645,78 660,68 Q675,58 690,70 Q705,82 720,72 Q735,62 750,74 Q765,86 780,76 Q795,66 810,78 Q825,90 840,80 Q855,70 870,82 Q885,94 900,84 Q915,74 930,86 Q945,98 960,88 Q975,78 990,90 Q1005,102 1020,92 Q1035,82 1050,94 Q1065,106 1080,96 Q1095,86 1110,98 Q1125,110 1140,100 Q1155,90 1170,102 Q1185,114 1200,104 Q1215,94 1230,106 Q1245,118 1260,108 Q1275,98 1290,110 Q1305,122 1320,112 Q1335,102 1350,114 Q1365,126 1380,116 Q1395,106 1410,118 Q1425,130 1440,120 L1440,100 Z"
      />
    </svg>
  </div>
);

export default RoughEdgeDivider;
