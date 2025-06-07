import Window from "../../components/Window/Window";
import styles from "./Welcome.module.css";

export default function Welcome({ onClose }) {
  return (
    <Window title="Welcome" onClose={onClose}>
      <div className={styles.welcomeContent}>
        <h2 className={styles.welcomeTitle}>Welcome to My Portfolio!</h2>
        <p className={styles.intro}>
          Hi, I’m Jose — a Computer Scientist and developer passionate about building clean, efficient, and user-friendly software.
        </p>
        <p className={styles.siteInfo}>
          This portoflio is designed to feel like a mini Unix system, featuring tiling windows, a dock and a top bar with additional information.
          As I get more free time on my hands I'll be implementing more 'programs' for users to tinker around and have fun exploring my portfolio.
          You're welcome to browse using the dock below or via the terminal.
        </p>

        <p className={styles.enjoy}>Enjoy exploring!</p>
      </div>
    </Window>
  );
}
