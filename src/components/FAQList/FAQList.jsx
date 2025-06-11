import PropTypes from "prop-types"
import FAQCard from "@components/FAQCard"
import styles from "./FAQList.module.css"

export default function FAQList({ faqs }) {
  return (
    <div className={styles.list}>
      {faqs.map((faq, i) => (
        <FAQCard key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

// Array of FAQCard props
FAQList.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.shape(FAQCard.propTypes)).isRequired,
}
