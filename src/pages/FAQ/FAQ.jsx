import { useEffect, useState } from "react";
import Window from "../../components/Window/Window";
import FAQList from "../../components/FAQList/FAQList";
import styles from "./FAQ.module.css";

export default function FAQPage({ onClose }) {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then(res => res.json())
      .then(setFaqs);
  }, []);

  return (
    <Window title="FAQ" onClose={onClose}>
      <div className={styles.faqContent}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <FAQList faqs={faqs} />
      </div>
    </Window>
  );
}
