import Window from "@components/Window"
import styles from "./Welcome.module.css"
import PropTypes from "prop-types"

export default function Welcome({ onClose }) {
  return (
    <Window title="Welcome" onClose={onClose}>
      <main className={`windowContent ${styles.welcomeContent}`}>
        <h1>Welcome to My Portfolio!</h1>
        <p>
          Hi, I&apos;m Jose — a Computer Scientist and developer passionate about building maintainable, efficient and
          user-friendly software.
        </p>
        <p className={styles.portfolioDescription}>
          This portfolio is designed to feel like a mini Unix system, featuring tiling windows, a dock, and a top bar
          with additional information. As I get more free time, I&apos;ll be implementing more &quot;programs&quot; for
          users to tinker around and have fun exploring my portfolio. You&apos;re welcome to browse using the dock below
          or via the terminal. You can read more about me opening the About or FAQ windows.
        </p>
        <h2>Enjoy Exploring!</h2>
      </main>
    </Window>
  )
}

Welcome.propTypes = {
  onClose: PropTypes.func.isRequired,
}
