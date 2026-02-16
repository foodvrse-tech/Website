export default function DishiiLogo() {
  return (
    <svg
      role="img"
      aria-label="Dishii"
      viewBox="0 0 340 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .dishii-font {
          font-family: 'Poppins', sans-serif;
          font-size: 72px;
          font-weight: 800;
        }
      `}</style>
      <text x="0" y="65" className="dishii-font" fill="#0A2351">
        Dishi
      </text>
      <g transform="translate(245, 0)">
        <rect x="0" y="28" width="16" height="40" fill="#FF8C00" rx="4" />
        <rect x="22" y="28" width="16" height="40" fill="#FF8C00" rx="4" />
        <circle cx="8" cy="12" r="8" fill="#FF8C00" />
        <circle cx="30" cy="12" r="8" fill="#FF8C00" />
      </g>
    </svg>
  );
}
