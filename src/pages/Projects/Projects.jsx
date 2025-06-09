import { useEffect, useState } from "react";
import Window from "../../components/Window/Window";
import ProjectList from "../../components/ProjectList/ProjectList";
import styles from "./Projects.module.css";

export default function Projects({ onClose }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => {
        setProjects(
          data.map(project => ({
            ...project,
            onClick: () => window.open(project.url, "_blank"),
          }))
        );
      });
  }, []);

  return (
    <Window title="Projects" onClose={onClose}>
      <main className="windowContent">
        <h1>Projects</h1>
        <ProjectList projects={projects} />
      </main>
    </Window>
  );
}
