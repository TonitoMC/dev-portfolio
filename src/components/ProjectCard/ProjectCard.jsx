import PropTypes from "prop-types"
import styles from "./ProjectCard.module.css"
import { iconList } from "@constants/iconList"
const ArrowIcon = iconList.arrow

function ProjectCard({ title, description, learned, onClick }) {
  return (
    <article
      className={`card ${styles.projectCard}`}
      tabIndex={0}
      onClick={(e) => {
        onClick?.(e)
        e.currentTarget.blur()
      }}
      role="button"
      aria-label={`Open project: ${title}`}
    >
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.arrowWrapper}>
          <ArrowIcon className="arrow" />
        </span>
      </header>
      <p className={styles.description}>{description}</p>
      <p className={styles.learned}>
        <strong>What I learned:</strong> {learned}
      </p>
    </article>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learned: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ProjectCard
