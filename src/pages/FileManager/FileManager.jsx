import { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import Window from "@components/Window"
import PathBar from "@components/FileManager/PathBar"
import FileSidebar from "@components/FileManager/FileSidebar"
import FileGrid from "@components/FileManager/FileGrid"
import styles from "./FileManager.module.css"

export default function FileManager({ onClose }) {
  const [path, setPath] = useState(["projects"])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  const currentItems = useMemo(() => {
    // Current folder is root of the app (which is /projects)
    if (path.length === 1 && path[0] === "projects") {
      return [
        { name: "Web", type: "folder", path: ["projects", "Web"] },
        { name: "Data Science", type: "folder", path: ["projects", "Data Science"] },
        { name: "Databases", type: "folder", path: ["projects", "Databases"] },
      ]
    }

    // Navigating inside projects subfolders
    if (path[0] === "projects" && path.length > 1) {
      const currentSubFolder = path[1]

      if (currentSubFolder === "Web") {
        return projects.map((project) => ({
          name: project.title,
          type: "file",
          url: project.url,
          description: project.description,
          learned: project.learned,
        }))
      }
    }

    return []
  }, [path, projects])

  const handleNavigate = (newPath) => {
    // Don't allow navigating above 'projects' in this view
    if (newPath.length === 0) {
      setPath(["projects"])
    } else {
      setPath(newPath)
    }
  }

  return (
    <Window title="Projects" onClose={onClose}>
      <section className={styles.fileManager}>
        <header>
          <PathBar path={path} onNavigate={handleNavigate} />
        </header>
        <div className={styles.mainLayout}>
          <FileSidebar currentFolder={path} onNavigate={handleNavigate} />
          <FileGrid items={currentItems} onNavigate={handleNavigate} />
        </div>
        <footer className={styles.statusBar}>
          <span>{currentItems.length} items</span>
          {path.length > 0 && <span> | {path.join("/")}</span>}
        </footer>
      </section>
    </Window>
  )
}

FileManager.propTypes = {
  onClose: PropTypes.func.isRequired,
}
