import styles from "./TerminalInputLine.module.css";

function parsePath(pathArr) {
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/");
}

export default function TerminalInputLine({
  cwd,
  user,
  host,
  input,
  setInput,
  onSubmit,
  inputRef,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.inputLine} autoComplete="off">
      <span className={styles.prompt}>
        {user}@{host}:{parsePath(cwd)}$
      </span>{" "}
      <input
        ref={inputRef}
        className={styles.input}
        value={input}
        onChange={e => setInput(e.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
