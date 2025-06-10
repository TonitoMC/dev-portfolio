import PropTypes from "prop-types"
import styles from "./Window.module.css"

function Window({ children, onClose }) {
  return (
    <section className={styles.window}>
      <nav className={styles.windowBar}>
        <div className={styles.windowButtons}>
          <button
            className={`${styles.dot} ${styles.close}`}
            onClick={onClose}
            title="Close"
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && onClose) onClose()
            }}
            aria-label="Close window"
          />
          <span className={`${styles.dot} ${styles.minimize}`} />
          <span className={`${styles.dot} ${styles.maximize}`} />
        </div>
      </nav>
      <main className={styles.content}>{children}</main>
    </section>
  )
}

Window.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Window
