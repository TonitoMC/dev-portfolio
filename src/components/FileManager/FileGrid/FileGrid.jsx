import PropTypes from "prop-types"
import styles from "./FileGrid.module.css"
import { iconList } from "@constants/iconList"

const FolderIcon = iconList.folder
const FileIcon = iconList.file

export default function FileGrid({ items, onNavigate }) {
  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>This folder is empty</p>
      </div>
    )
  }

  return (
    <section className={styles.grid}>
      {items.map((item, i) => (
        <button
          key={i}
          className={styles.item}
          onClick={() => (item.type === "folder" ? onNavigate(item.path) : window.open(item.url, "_blank"))}
          title={item.description || item.name}
        >
          <div className={styles.iconWrapper}>
            {item.type === "folder" ? (
              <FolderIcon className={styles.folderIcon} />
            ) : (
              <FileIcon className={styles.fileIcon} />
            )}
          </div>
          <span className={styles.name}>{item.name}</span>
          {item.type === "file" && item.learned && <span className={styles.hint}>{item.learned}</span>}
        </button>
      ))}
    </section>
  )
}

FileGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["file", "folder"]).isRequired,
      path: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
      description: PropTypes.string,
      learned: PropTypes.string,
    })
  ).isRequired,
  onNavigate: PropTypes.func.isRequired,
}
