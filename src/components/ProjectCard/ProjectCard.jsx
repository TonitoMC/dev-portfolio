import styles from "./ProjectCard.module.css";

function DiagonalArrow(props) {
  // ↗ SVG (upper right arrow)
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <polyline points="7 17 17 7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  description,
  learned,
  onClick,
  // techLogos = [], // for future use
}) {
  return (
    <div className={styles.card} tabIndex={0} onClick={onClick}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <DiagonalArrow />
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.learned}>What I learned: {learned}</div>
      {/* <div className={styles.techList}>
        {techLogos.map((logo, i) => (
          <img key={i} src={logo} alt="" height={28} />
        ))}
      </div> */}
    </div>
  );
}
