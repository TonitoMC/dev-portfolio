import PropTypes from "prop-types"
import { useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "./TopBarPopover.module.css"

export default function TopBarPopover({ anchorRef, onMouseEnter, onMouseLeave, children }) {
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useLayoutEffect(() => {
    if (anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      })
    }
  }, [anchorRef])

  return (
    <motion.div
      className={styles.popover}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        zIndex: 9999,
      }}
      initial={{ opacity: 0, y: -6, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -6, x: "-50%" }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.arrowUp} />
      {children}
    </motion.div>
  )
}

TopBarPopover.propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node.isRequired,
}
