import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

function ProjectList({ projects }) {
  return (
    <div className={styles.list}>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
