import styles from "./Dock.module.css";

function Dock({ apps, onAppSelect }) {
  return (
    <div className={styles.dock}>
      {apps.map((app, idx) => {
        const Icon = app.icon;
        return (
          <div
            key={app.key}
            className={styles.dockItem}
            onClick={() => onAppSelect(app.key)}
          >
            {Icon ? <Icon className={styles.dockIcon} /> : null}
            <span className={styles.dockLabel}>{app.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Dock;
