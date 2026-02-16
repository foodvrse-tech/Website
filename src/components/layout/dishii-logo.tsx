export default function DishiiLogo() {
  return (
    <svg
      role="img"
      aria-label="Dishii"
      viewBox="0 0 320 80"
      className="h-auto w-full"
    >
      <style>
        {`
          .dishii-font {
            font-family: 'Poppins', sans-serif;
            font-size: 72px;
            font-weight: 800;
          }
        `}
      </style>
      {/* "Dish" in blue */}
      <text y="65" className="dishii-font">
        <tspan fill="#0A2351">Dish</tspan>
        {/* first orange "i" */}
        <tspan dx="5" fill="#F37F15">i</tspan>
      </text>

      {/* second orange "i" (icon) */}
      <g transform="translate(250, 0)">
        <rect y="27" width="16" height="38" fill="#F37F15" />
        <circle cx="8" cy="12" r="8" fill="#F37F15" />
        <circle cx="32" cy="12" r="8" fill="#F37F15" />
      </g>
    </svg>
  );
}
