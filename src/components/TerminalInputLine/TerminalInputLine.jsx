import PropTypes from "prop-types"
import styles from "./TerminalInputLine.module.css"

function parsePath(pathArr) {
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/")
}

const VALID_COMMANDS = ["ls", "cd", "cat", "help", "pwd", "clear"]

export default function TerminalInputLine({ cwd, user, host, input, setInput, onSubmit, inputRef }) {
  const renderHighlightedText = () => {
    if (!input) return null

    const parts = input.split(/(\s+)/) // Split by whitespace but keep the whitespace
    let commandFound = false

    return parts.map((part, i) => {
      if (!part.trim()) return <span key={i}>{part}</span>

      if (!commandFound) {
        commandFound = true
        const isValid = VALID_COMMANDS.includes(part.trim())
        return (
          <span key={i} className={isValid ? styles.validCommand : styles.invalidCommand}>
            {part}
          </span>
        )
      }

      return (
        <span key={i} className={styles.argument}>
          {part}
        </span>
      )
    })
  }

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
        <div className={styles.inputWrapper}>
          <div className={styles.highlightLayer}>{renderHighlightedText()}</div>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>
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
