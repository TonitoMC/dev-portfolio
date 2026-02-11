import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./TilingLayout.module.css"

export default function TilingLayout({ children, pageKeys = [] }) {
  const childrenArray = Array.isArray(children) ? children : [children]
  const count = childrenArray.length

  const masterWindowFlexBasis = count === 1 ? "100%" : "50%"
  const stackColumnFlexBasis = count === 1 ? "0%" : "50%"
  const stackColumnDisplay = count === 1 ? "none" : "flex"

  return (
    <motion.div className={styles.masterStackLayout} layout style={{ height: "100%", minHeight: 0 }}>
      <AnimatePresence mode="popLayout">
        {count >= 1 && (
          <motion.div
            className={`${styles.masterWindow} ${count === 1 ? styles.singleWindowCentered : ""}`}
            layout
            key={pageKeys[0] ?? 0}
            style={{ height: "100%", minHeight: 0, flex: `1 1 ${masterWindowFlexBasis}` }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
          >
            {childrenArray[0]}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={styles.stackColumn}
        layout
        style={{
          height: "100%",
          minHeight: 0,
          flex: `1 1 ${stackColumnFlexBasis}`,
          display: stackColumnDisplay,
        }}
      >
        <AnimatePresence mode="popLayout">
          {childrenArray.slice(1).map((child, i) => (
            <motion.div
              className={styles.stackWindow}
              key={pageKeys[i + 1] ?? i + 1}
              layout
              style={{ height: "100%", minHeight: 0 }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

TilingLayout.propTypes = {
  children: PropTypes.node,
  pageKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
}
