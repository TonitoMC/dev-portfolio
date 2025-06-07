export default function TerminalIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 9l3 3-3 3" />
      <line x1="13" y1="16" x2="16" y2="16" />
    </svg>
  );
}
