import PropTypes from "prop-types"
import styles from "./Dock.module.css"

function Dock({ apps, onAppSelect }) {
  return (
    <nav className={styles.dock}>
      {apps.map((app) => {
        const Icon = app.icon
        return (
          <button key={app.key} className={styles.dockItem} onClick={() => onAppSelect(app.key)} aria-label={app.label}>
            {Icon ? <Icon className={styles.dockIcon} /> : null}
            <span className={styles.dockLabel}>{app.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

Dock.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired, // Identifier for the app
      label: PropTypes.string.isRequired, // Shown / 'user friendly' text for the app
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]), // Icon for the app
    })
  ).isRequired,
  onAppSelect: PropTypes.func.isRequired,
}

export default Dock
