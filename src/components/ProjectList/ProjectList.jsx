import PropTypes from "prop-types"
import ProjectCard from "@components/ProjectCard"
import styles from "./ProjectList.module.css"

function ProjectList({ projects }) {
  return (
    <div className={styles.list}>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  )
}

// Array of ProjectCard props
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectCard.propTypes)).isRequired,
}

export default ProjectList
