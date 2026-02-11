import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { linkify } from "@utils/linkify"
import styles from "./TerminalHistory.module.css"

function parsePath(pathArr) {
  if (!pathArr || !Array.isArray(pathArr)) return "~"
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/")
}

// Errors etc. are for later, it was originally planned to add
// a more robust file system with text editors but wasn't possible
// within timeframe. Still leaving it there to tinker with in the future :)
export default function TerminalHistory({ history = [] }) {
  const endRef = useRef()

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" })
  }, [history])

  return (
    <div className={styles.history}>
      {history.map((item, i) => {
        if (item.type === "error") {
          return (
            <pre key={i} className={styles.error}>
              {linkify(item.text)}
            </pre>
          )
        }
        if (item.type === "info") {
          return (
            <pre key={i} className={styles.info}>
              {linkify(item.text)}
            </pre>
          )
        }
        if (item.prompt) {
          if (item.transient) {
            return (
              <div key={i} className={styles.transientEntry}>
                <span className={styles.path}>[{parsePath(item.cwd)}]</span>
                <span className={styles.arrow}>❯</span>
                <span className={styles.commandText}>{item.text}</span>
              </div>
            )
          }
          return (
            <div key={i} className={styles.historyEntry}>
              <div className={styles.promptLine}>
                <span className={styles.userHost}>{item.userHost}</span>
                <span className={styles.path}>{parsePath(item.cwd)}</span>
              </div>
              <div className={styles.commandLine}>
                <span className={styles.arrow}>❯</span>
                <span className={styles.commandText}>{item.text}</span>
              </div>
            </div>
          )
        }
        return (
          <pre key={i} className={styles.output}>
            {typeof item.text === "string" ? linkify(item.text) : item.text}
          </pre>
        )
      })}
      <div ref={endRef} />
    </div>
  )
}

TerminalHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      prompt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      transient: PropTypes.bool,
      userHost: PropTypes.string,
      cwd: PropTypes.array,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired,
}
