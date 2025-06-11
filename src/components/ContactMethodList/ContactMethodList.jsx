import ContactMethodCard from "@components/ContactMethodCard"
import styles from "./ContactMethodList.module.css"
import PropTypes from "prop-types"

export default function ContactMethodList({ methods }) {
  return (
    <div className={styles.list}>
      {methods.map((method, i) => {
        return (
          <ContactMethodCard key={i} icon={method.icon} label={method.label} value={method.value} href={method.href} />
        )
      })}
    </div>
  )
}

// Array of ContactMethodCard props
ContactMethodList.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape(ContactMethodCard.propTypes)).isRequired,
}
