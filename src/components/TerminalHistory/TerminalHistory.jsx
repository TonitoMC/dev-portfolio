import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
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
        let content = null

        if (item.type === "error") {
          content = (
            <pre key={i} className={styles.error}>
              {linkify(item.text)}
            </pre>
          )
        } else if (item.type === "info") {
          content = (
            <pre key={i} className={styles.info}>
              {linkify(item.text)}
            </pre>
          )
        } else if (item.prompt) {
          if (item.transient) {
            content = (
              <div key={i} className={styles.transientEntry}>
                <span className={styles.path}>[{parsePath(item.cwd)}]</span>
                <span className={styles.arrow}>❯</span>
                <span className={styles.commandText}>{item.text}</span>
              </div>
            )
          } else {
            content = (
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
        } else {
          content = (
            <pre key={i} className={styles.output}>
              {typeof item.text === "string" ? linkify(item.text) : item.text}
            </pre>
          )
        }

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {content}
          </motion.div>
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
