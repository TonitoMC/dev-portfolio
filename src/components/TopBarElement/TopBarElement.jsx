import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { AnimatePresence } from "framer-motion"
import TopBarPopover from "@components/TopBarPopover"
import styles from "./TopBarElement.module.css"

export default function TopBarElement({ icon, ariaLabel, description, link, linkLabel }) {
  const [show, setShow] = useState(false)
  const anchorRef = useRef(null)
  const timeout = useRef()

  const open = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setShow(true)
  }
  const close = () => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setShow(false), 150)
  }

  const hasPopover = Boolean(description || linkLabel || link)

  return (
    <span
      className={styles.iconLink}
      ref={anchorRef}
      onMouseEnter={hasPopover ? open : undefined}
      onMouseLeave={hasPopover ? close : undefined}
      onFocus={hasPopover ? open : undefined}
      onBlur={hasPopover ? close : undefined}
      tabIndex={0}
      aria-label={ariaLabel}
      style={{ cursor: "default" }}
    >
      <span className={styles.iconOnly}>{icon}</span>
      <AnimatePresence>
        {hasPopover && show && (
          <TopBarPopover anchorRef={anchorRef} onMouseEnter={open} onMouseLeave={close}>
            {description && (
              <div style={{ marginBottom: link ? "0.5rem" : 0 }}>
                <strong>{description}</strong>
              </div>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--nord8)",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onFocus={open}
                onBlur={close}
                onClick={close}
              >
                {linkLabel || link}
              </a>
            )}
          </TopBarPopover>
        )}
      </AnimatePresence>
    </span>
  )
}

TopBarElement.propTypes = {
  icon: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
}
