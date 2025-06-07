import { useEffect, useRef } from "react";
import styles from "./TerminalHistory.module.css";

export default function TerminalHistory({ history = [] }) {
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" });
  }, [history]);

  return (
    <div className={styles.history}>
      {history.map((item, i) => {
        if (item.type === "error") {
          return (
            <pre key={i} className={styles.error}>
              {item.text}
            </pre>
          );
        }
        if (item.type === "info") {
          return (
            <pre key={i} className={styles.info}>
              {item.text}
            </pre>
          );
        }
        if (item.prompt) {
          return (
            <div key={i} className={styles.line}>
              <span className={styles.prompt}>{item.prompt}</span>{" "}
              {item.text}
            </div>
          );
        }
        return (
          <pre key={i} className={styles.output}>
            {item.text}
          </pre>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
