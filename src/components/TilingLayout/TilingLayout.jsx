import { motion, AnimatePresence } from "framer-motion";
import styles from "./TilingLayout.module.css";

export default function TilingLayout({ children, pageKeys = [] }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const count = childrenArray.length;

  // Always render the wrapper, animate the window in/out
  if (count <= 1) {
    return (
      <motion.div className={styles.singleWrapper} layout style={{ height: "100%", minHeight: 0 }}>
        <AnimatePresence mode="popLayout">
          {count === 1 && (
            <motion.div
              className={styles.windowWrapper}
              key={pageKeys[0] ?? 0}
              layout
              style={{ height: "100%", minHeight: 0 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            >
              {childrenArray[0]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Master-stack layout for 2+ windows
  return (
    <motion.div className={styles.masterStackLayout} layout style={{ height: "100%", minHeight: 0 }}>
      <motion.div
        className={styles.masterWindow}
        layout
        key={pageKeys[0] ?? 0}
        style={{ height: "100%", minHeight: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      >
        {childrenArray[0]}
      </motion.div>
      <motion.div className={styles.stackColumn} layout style={{ height: "100%", minHeight: 0 }}>
        <AnimatePresence mode="popLayout">
          {childrenArray.slice(1).map((child, i) => (
            <motion.div
              className={styles.stackWindow}
              key={pageKeys[i + 1] ?? i + 1}
              layout
              style={{ height: "100%", minHeight: 0 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
