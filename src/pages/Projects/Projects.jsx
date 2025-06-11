import { useEffect, useState } from "react"
import Window from "@components/Window"
import ProjectList from "@components/ProjectList"
import PropTypes from "prop-types"

export default function Projects({ onClose }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(
          data.map((project) => ({
            ...project,
            onClick: () => window.open(project.url, "_blank"),
          }))
        )
      })
  }, [])

  return (
    <Window title="Projects" onClose={onClose}>
      <main className="windowContent">
        <h1>Projects</h1>
        <ProjectList projects={projects} />
      </main>
    </Window>
  )
}

Projects.propTypes = {
  onClose: PropTypes.func.isRequired,
}
