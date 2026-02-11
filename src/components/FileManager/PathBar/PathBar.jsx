import PropTypes from "prop-types"
import styles from "./PathBar.module.css"
import { iconList } from "@constants/iconList"

const ArrowIcon = iconList.arrow

export default function PathBar({ path, onNavigate }) {
  const parts = ["root", ...path]

  return (
    <nav className={styles.pathBar}>
      {parts.map((part, i) => (
        <span key={i} className={styles.partWrapper}>
          <button
            className={styles.pathPart}
            onClick={() => onNavigate(path.slice(0, i))}
            disabled={i === parts.length - 1 && i !== 0}
          >
            {part}
          </button>
          {i < parts.length - 1 && <ArrowIcon className={styles.separator} />}
        </span>
      ))}
    </nav>
  )
}

PathBar.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavigate: PropTypes.func.isRequired,
}
