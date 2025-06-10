import PropTypes from "prop-types"
import { useState, useId } from "react"
import styles from "./FAQCard.module.css"
import { iconList } from "@constants/iconList"

const ArrowIcon = iconList.arrow

function FAQCard({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const answerId = useId()

  return (
    <article className={`${styles.faqCard} ${open ? styles.open : ""}`}>
      <header>
        <h3>
          <button
            className={styles.questionBtn}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={answerId}
            id={`faq-question-${answerId}`}
            type="button"
          >
            <span>{question}</span>
            <ArrowIcon className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} />
          </button>
        </h3>
      </header>
      <section
        className={styles.answerWrapper}
        id={answerId}
        aria-labelledby={`faq-question-${answerId}`}
        aria-hidden={!open}
        style={{ maxHeight: open ? 300 : 0 }}
        role="region"
      >
        <p className={styles.answer}>{answer}</p>
      </section>
    </article>
  )
}

FAQCard.propTypes = {
  question: PropTypes.string.isRequired, // Question / title
  answer: PropTypes.string.isRequired, // Answer / description
  defaultOpen: PropTypes.bool, // If the cards start open or closed
}

export default FAQCard
