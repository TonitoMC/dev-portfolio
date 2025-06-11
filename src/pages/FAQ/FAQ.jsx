import { useEffect, useState } from "react"
import Window from "@components/Window"
import FAQList from "@components/FAQList"
import styles from "./FAQ.module.css"
import PropTypes from "prop-types"

export default function FAQPage({ onClose }) {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then(setFaqs)
  }, [])

  return (
    <Window title="FAQ" onClose={onClose}>
      <main className="windowContent">
        <h1 className={styles.faqTitle}>FAQ</h1>
        <FAQList faqs={faqs} />
      </main>
    </Window>
  )
}

FAQPage.propTypes = {
  onClose: PropTypes.func.isRequired,
}
