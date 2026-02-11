import styles from "./TerminalFetch.module.css"

export default function TerminalFetch() {
  const info = [
    { label: "OS", value: "Arch Linux x86_64", color: "var(--nord9)" },
    { label: "Host", value: "Jose-Portfolio-v2", color: "var(--nord8)" },
    { label: "Kernel", value: "6.1.x-zen", color: "var(--nord7)" },
    { label: "Uptime", value: "2 hours, 14 mins", color: "var(--nord14)" },
    { label: "Shell", value: "zsh 5.9", color: "var(--nord10)" },
    { label: "WM", value: "TilingLayout-WM", color: "var(--nord15)" },
    { label: "Theme", value: "Nord-Riced", color: "var(--nord12)" },
    { label: "Terminal", value: "React-Term", color: "var(--nord13)" },
  ]

  return (
    <div className={styles.fetchContainer}>
      <pre className={styles.asciiArt}>
{`      .---.
     /     \\
    | () () |
     \\  ^  /
      |||||
      |||||
`}
      </pre>
      <div className={styles.infoList}>
        <div className={styles.userHost}>
          <span className={styles.user}>jose</span>
          <span className={styles.at}>@</span>
          <span className={styles.host}>portfolio</span>
        </div>
        <div className={styles.separator}>-----------------</div>
        {info.map((item, i) => (
          <div key={i} className={styles.infoItem}>
            <span className={styles.label} style={{ color: item.color }}>{item.label}:</span>
            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
        <div className={styles.colorPalette}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className={`${styles.colorBlock} color-${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
