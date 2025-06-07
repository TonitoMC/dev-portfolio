import TopBar from "../TopBar/TopBar";
import Dock from "../Dock/Dock";
import styles from "./Layout.module.css";

export default function Layout({ children, dockApps, onAppSelect }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <TopBar />
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <Dock apps={dockApps} onAppSelect={onAppSelect} />
      </footer>
    </div>
  );
}
