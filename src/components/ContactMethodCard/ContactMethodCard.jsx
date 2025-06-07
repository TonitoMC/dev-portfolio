import styles from "./ContactMethodCard.module.css";

export default function ContactMethodCard({ icon, label, value, href }) {
  return (
    <a
      className={styles.card}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
    >
      <span className={styles.icon}>{icon}</span>
      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
      <span className={styles.arrow} aria-hidden>
        {/* Diagonal arrow, modern style */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="8 8 16 8 16 16" />
          <line x1="8" y1="16" x2="16" y2="8" />
        </svg>
      </span>
    </a>
  );
}
