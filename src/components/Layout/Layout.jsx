import PropTypes from "prop-types"
import TopBar from "@components/TopBar"
import Dock from "@components/Dock"
import styles from "./Layout.module.css"

function Layout({ children, dockApps, onAppSelect, topBarElements }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <TopBar elements={topBarElements} />
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <Dock apps={dockApps} onAppSelect={onAppSelect} />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Main content
  dockApps: PropTypes.array.isRequired, // Applications for the dock
  onAppSelect: PropTypes.func.isRequired, // Action on app selection to pass onto dock
  topBarElements: PropTypes.array.isRequired, // Elements for the top bar
}

export default Layout
