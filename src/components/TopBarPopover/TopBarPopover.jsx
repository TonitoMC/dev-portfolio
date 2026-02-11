import PropTypes from "prop-types"
import { useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "./TopBarPopover.module.css"

export default function TopBarPopover({ show, anchorRef, onMouseEnter, onMouseLeave, children }) {
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useLayoutEffect(() => {
    if (show && anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      })
    }
  }, [show, anchorRef])

  if (!show) return null

  return (
    <motion.div
      className={styles.popover}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        transform: "translateX(-50%)",
        zIndex: 9999,
      }}
      initial={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
      exit={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.arrowUp} />
      {children}
    </motion.div>
  )
}

TopBarPopover.propTypes = {
  show: PropTypes.bool.isRequired,
  anchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node.isRequired,
}
