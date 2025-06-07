import FAQCard from "../FAQCard/FAQCard";
import styles from "./FAQList.module.css";

export default function FAQList({ faqs }) {
  return (
    <div className={styles.list}>
      {faqs.map((faq, i) => (
        <FAQCard
          key={i}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
