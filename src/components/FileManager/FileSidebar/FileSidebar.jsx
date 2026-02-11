import PropTypes from "prop-types"
import styles from "./FileSidebar.module.css"
import { iconList } from "@constants/iconList"

const FolderIcon = iconList.folder

export default function FileSidebar({ currentFolder, onNavigate }) {
  const folders = [
    { id: "projects", name: "Projects", path: ["projects"] },
    { id: "web", name: "Web", path: ["projects", "Web"] },
    { id: "data-science", name: "Data Science", path: ["projects", "Data Science"] },
    { id: "databases", name: "Databases", path: ["projects", "Databases"] },
  ]

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Places</h3>
      <ul className={styles.list}>
        {folders.map((folder) => {
          const isActive =
            (folder.path.length === 1 && currentFolder.length === 1 && folder.path[0] === currentFolder[0]) ||
            (folder.path.length > 1 && currentFolder.length > 1 && folder.path[1] === currentFolder[1])

          return (
            <li key={folder.id}>
              <button
                className={`${styles.item} ${isActive ? styles.active : ""}`}
                onClick={() => onNavigate(folder.path)}
              >
                <FolderIcon className={styles.icon} />
                <span>{folder.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

FileSidebar.propTypes = {
  currentFolder: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavigate: PropTypes.func.isRequired,
}
