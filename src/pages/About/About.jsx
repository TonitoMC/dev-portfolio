import PropTypes from "prop-types"
import Window from "@components/Window/Window"
import styles from "./About.module.css"

export default function About({ onClose }) {
  return (
    <Window title="About Me" onClose={onClose}>
      <div className={styles.aboutContent}>
        <h1>About Me</h1>

        <section>
          <h2>Welcome</h2>
          <p>
            Hey, I&apos;m Jose! I&apos;m based in Guatemala and I love building software to solve real world problems.
            This portfolio is my playground for exploring new frontend techniques, animations, and design ideas.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>
            My strongest programming language is Go, which I use for backend development—usually with the standard HTTP
            package or lightweight libraries like Echo or Gin. On the frontend, I&apos;m most comfortable with React,
            vanilla JavaScript, HTML, and CSS, building with modern tools like Bun and Vite. Although, I enjoy backend
            work the most. I&apos;m also experienced with team collaboration tools like Git and Jira, and I&apos;m
            familiar with SCRUM methodology for agile development.
          </p>
        </section>

        <section>
          <h2>What I&apos;m Up To</h2>
          <p>
            I&apos;m currently diving deeper into frontend development projects and experimenting with creative UI/UX.
            In the near future I&apos;ll be deploying some of my previous CLI projects to the web and including them in
            this portfolio.
          </p>
        </section>

        <section>
          <h2>Beyond Code</h2>
          <p>
            When I&apos;m not coding, you&apos;ll probably find me listening to metal music, playing shooter games, or
            reading books to unwind and get inspired.
          </p>
        </section>

        <section>
          <h2>How to Explore</h2>
          <p>
            Close the welcome window and just play around with the website! Open the terminal, check out my projects, or
            browse the dock to see what&apos;s here.
          </p>
        </section>
      </div>
    </Window>
  )
}

About.propTypes = {
  onClose: PropTypes.func.isRequired,
}
