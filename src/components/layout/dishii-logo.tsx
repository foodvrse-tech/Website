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
      {/* second 'i' as an icon, in orange */}
      <g transform="translate(245, 0)">
        <rect y="27" width="24" height="38" fill="#F37F15" />
        <circle cx="6" cy="12" r="8" fill="#F37F15" />
        <circle cx="22" cy="12" r="8" fill="#F37F15" />
      </g>
    </svg>
  );
}
