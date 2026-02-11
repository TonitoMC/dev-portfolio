import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./FileGrid.module.css"
import { iconList } from "@constants/iconList"

const FolderIcon = iconList.folder
const FileIcon = iconList.file

export default function FileGrid({ items, onNavigate }) {
  const [hoveredItem, setHoveredItem] = useState(null)

  // Reset hovered item when folder items change (navigation)
  useEffect(() => {
    setHoveredItem(null)
  }, [items])

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>This folder is empty</p>
      </div>
    )
  }

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <button
            key={i}
            className={styles.item}
            onClick={() => (item.type === "folder" ? onNavigate(item.path) : window.open(item.url, "_blank"))}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
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
      </div>

      <aside className={styles.previewPanel}>
        <AnimatePresence mode="wait">
          {hoveredItem && hoveredItem.type === "file" ? (
            <motion.div
              key={hoveredItem.name}
              className={styles.previewCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className={styles.previewImageWrapper}>
                <img src="/screenshots/placeholder.svg" alt={hoveredItem.name} className={styles.previewImage} />
                <div className={styles.previewOverlay}>
                  <span>Preview</span>
                </div>
              </div>
              <div className={styles.previewInfo}>
                <h4>{hoveredItem.name}</h4>
                <p>{hoveredItem.description}</p>
                {hoveredItem.learned && (
                  <div className={styles.learnedTag}>
                    <strong>Stack:</strong> {hoveredItem.learned}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className={styles.emptyPreview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FileIcon className={styles.placeholderIcon} />
              <p>Hover over a file to see details</p>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
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
