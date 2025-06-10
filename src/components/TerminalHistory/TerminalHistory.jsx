import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { linkify } from "@utils/linkify"
import styles from "./TerminalHistory.module.css"

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
          return (
            <div key={i} className={styles.line}>
              <span className={styles.prompt}>{item.prompt}</span> {item.text}
            </div>
          )
        }
        return (
          <pre key={i} className={styles.output}>
            {linkify(item.text)}
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
      prompt: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
