import styles from "./Window.module.css";

function Window({ children, onClose }) {
  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <div className={styles.windowButtons}>
          <span
            className={`${styles.dot} ${styles.close}`}
            style={{ background: "var(--nord11)" }}
            onClick={onClose}
            title="Close"
            tabIndex={0}
            onKeyDown={e => {
              if ((e.key === "Enter" || e.key === " ") && onClose) onClose();
            }}
            role="button"
            aria-label="Close window"
          />
          <span className={styles.dot} style={{ background: "var(--nord13)" }} />
          <span className={styles.dot} style={{ background: "var(--nord14)" }} />
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Window;
