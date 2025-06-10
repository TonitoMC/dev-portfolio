import styles from "./ContactMethodCard.module.css"
import PropTypes from "prop-types"
import { iconList } from "@constants/iconList"

const ArrowIcon = iconList.arrow

export default function ContactMethodCard({ icon, label, value, href }) {
  return (
    <a
      className={`card ${styles.contactCard}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      onClick={(e) => {
        e.currentTarget.blur()
      }}
    >
      <span className={styles.icon}>{icon}</span>
      <div className={styles.info}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.value}>{value}</p>
      </div>
      <span className={`arrow ${styles.arrow}`} aria-hidden>
        <ArrowIcon />
      </span>
    </a>
  )
}

ContactMethodCard.propTypes = {
  icon: PropTypes.node.isRequired, // Icon as React Component
  label: PropTypes.string.isRequired, // Label / subtitle eg. Email
  value: PropTypes.string.isRequired, // Value / link / description
  href: PropTypes.string.isRequired, // Link for redirect
}
