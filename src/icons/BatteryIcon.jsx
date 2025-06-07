export default function BatteryIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
