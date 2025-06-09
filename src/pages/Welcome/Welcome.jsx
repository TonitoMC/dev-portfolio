import Window from "../../components/Window/Window";
import styles from "./Welcome.module.css"

export default function Welcome({ onClose }) {
  return (
    <Window title="Welcome" onClose={onClose}>
      <main className={`windowContent ${styles.welcomeContent}`}>
        <h1>Welcome to My Portfolio!</h1>
        <p>
          Hi, I’m Jose — a Computer Scientist and developer passionate about building clean, efficient, and user-friendly software.
        </p>
        <p className={styles.portfolioDescription}>
          This portfolio is designed to feel like a mini Unix system, featuring tiling windows, a dock, and a top bar with additional information.
          As I get more free time, I'll be implementing more "programs" for users to tinker around and have fun exploring my portfolio.
          You're welcome to browse using the dock below or via the terminal.
        </p>
        <h2>
          Enjoy Exploring!
        </h2>
      </main>
    </Window >
  );
}
