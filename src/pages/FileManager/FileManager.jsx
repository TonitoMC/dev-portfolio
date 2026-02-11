import { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import Window from "@components/Window"
import PathBar from "@components/FileManager/PathBar"
import FileSidebar from "@components/FileManager/FileSidebar"
import FileGrid from "@components/FileManager/FileGrid"
import styles from "./FileManager.module.css"

export default function FileManager({ onClose }) {
  const [path, setPath] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  const currentItems = useMemo(() => {
    // Root level
    if (path.length === 0) {
      return [
        { name: "Web", type: "folder", path: ["Web"] },
        { name: "Data Science", type: "folder", path: ["Data Science"] },
        { name: "Databases", type: "folder", path: ["Databases"] },
      ]
    }

    const currentFolder = path[0]

    if (currentFolder === "Web") {
      return projects.map((project) => ({
        name: project.title,
        type: "file",
        url: project.url,
        description: project.description,
        learned: project.learned,
      }))
    }

    // Data Science and Databases are currently empty as per requirement
    return []
  }, [path, projects])

  const handleNavigate = (newPath) => {
    setPath(newPath)
  }

  return (
    <Window title="File Manager" onClose={onClose}>
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
