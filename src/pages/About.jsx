import Window from "../components/Window/Window";
import styles from "./About.module.css";

export default function About({ onClose }) {
  return (
    <Window title="About Me" onClose={onClose}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>

        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionTitle}>Introduction</h3>
          <p className={styles.aboutParagraph}>
            I'm Jose, a Computer Scientist and Developer who loves building clean, efficient, and user-friendly software. I enjoy exploring new technologies and solving real-world problems through code.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionTitle}>Skills</h3>
          <ul className={styles.aboutList}>
            <li>JavaScript / TypeScript</li>
            <li>React &amp; Frontend Development</li>
            <li>Python &amp; Scripting</li>
            <li>Unix/Linux Environments</li>
            <li>Algorithms &amp; Data Structures</li>
          </ul>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionTitle}>Experience</h3>
          <p className={styles.aboutParagraph}>
            I have experience working on personal and academic projects, collaborating with teams, and contributing to open-source. My focus is on writing maintainable code and delivering robust solutions.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionTitle}>Interests</h3>
          <p className={styles.aboutParagraph}>
            Outside of coding, I enjoy learning about operating systems, customizing my workflow (Qtile user!), and exploring new tech. I also like music, gaming, and contributing to the open-source community.
          </p>
        </section>
      </div>
    </Window>
  );
}
