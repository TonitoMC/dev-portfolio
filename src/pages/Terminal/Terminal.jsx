import { useRef, useState } from "react"
import Window from "@components/Window"
import useFileSystem from "@hooks/useFileSystem"
import runTerminalCommand from "@hooks/runTerminalCommand"
import TerminalHistory from "@components/TerminalHistory"
import TerminalInputLine from "@components/TerminalInputLine"
import styles from "./Terminal.module.css"
import PropTypes from "prop-types"

const USER = "jose"
const HOST = "portfolio"

function parsePath(pathArr) {
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/")
}

export default function Terminal({ onClose }) {
  const { getNode, setFile } = useFileSystem()
  const [cwd, setCwd] = useState([])
  const [history, setHistory] = useState([
    {
      prompt: `${USER}@${HOST}:~$`,
      text: "Type 'help' for a list of commands.",
    },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef()

  const handleCommand = (cmd) => {
    const { output, newCwd } = runTerminalCommand(cmd, {
      cwd,
      setCwd,
      getNode,
      setFile,
    })
    if (newCwd !== undefined) setCwd(newCwd)
    setHistory((prev) => [
      ...prev,
      { prompt: `${USER}@${HOST}:${parsePath(cwd)}$`, text: cmd },
      ...(output ? [{ text: output }] : []),
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  return (
    <Window title="Terminal" onClose={onClose}>
      <div className={styles.terminalContent} onClick={() => inputRef.current?.focus()}>
        <TerminalHistory history={history} />
        <TerminalInputLine
          cwd={cwd}
          user={USER}
          host={HOST}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          inputRef={inputRef}
        />
      </div>
    </Window>
  )
}

Terminal.propTypes = {
  onClose: PropTypes.func.isRequired,
}
