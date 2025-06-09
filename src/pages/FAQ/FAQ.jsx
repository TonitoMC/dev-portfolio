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
      <main className="windowContent">
        <h1 className={styles.faqTitle}>FAQ</h1>
        <FAQList faqs={faqs} />
      </main>
    </Window>
  );
}
