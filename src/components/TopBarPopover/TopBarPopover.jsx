import PropTypes from "prop-types"
import { useLayoutEffect, useState } from "react"
import styles from "./TopBarPopover.module.css"

export default function TopBarPopover({ show, anchorRef, onMouseEnter, onMouseLeave, children }) {
  const [style, setStyle] = useState({ display: "none" })

  useLayoutEffect(() => {
    if (show && anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect()
      setStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "block",
      })
    } else {
      setStyle({ display: "none" })
    }
  }, [show, anchorRef])

  if (!show) return null
  return (
    <div className={styles.popover} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.arrowUp} />
      {children}
    </div>
  )
}

TopBarPopover.propTypes = {
  show: PropTypes.bool.isRequired,
  anchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node.isRequired,
}
