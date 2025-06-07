import { useState } from "react";
import styles from "./FAQCard.module.css";


// Inline arrow icon
function ArrowIcon({ open }) {
  return (
    <svg
      className={`${styles.arrow} ${open ? styles.open : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="8 12 16 12" />
      <polyline points="12 8 16 12 12 16" />
    </svg>
  );
}

export default function FAQCard({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.card} ${open ? styles.open : ""}`}>
      <button
        className={styles.questionBtn}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="faq-answer"
      >
        <span>{question}</span>
        <ArrowIcon open={open} />
      </button>
      <div
        className={styles.answerWrapper}
        id="faq-answer"
        aria-hidden={!open}
        style={{ maxHeight: open ? 300 : 0 }}
      >
        <div className={styles.answer}>{answer}</div>
      </div>
    </div>
  );
}
