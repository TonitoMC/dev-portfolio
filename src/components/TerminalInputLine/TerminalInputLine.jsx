import PropTypes from "prop-types"
import styles from "./TerminalInputLine.module.css"

function parsePath(pathArr) {
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/")
}

export default function TerminalInputLine({ cwd, user, host, input, setInput, onSubmit, inputRef }) {
  return (
    <form onSubmit={onSubmit} className={styles.container} autoComplete="off">
      <div className={styles.promptLine}>
        <span className={styles.userHost}>
          {user}@{host}
        </span>
        <span className={styles.path}>{parsePath(cwd)}</span>
      </div>
      <div className={styles.inputLine}>
        <span className={styles.arrow}>❯</span>
        <input
          ref={inputRef}
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
        />
      </div>
    </form>
  )
}

TerminalInputLine.propTypes = {
  cwd: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([
    // Accept both callback refs and object refs
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
}
