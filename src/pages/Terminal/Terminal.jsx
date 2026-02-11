import { useRef, useState } from "react"
import Window from "@components/Window"
import useFileSystem from "@hooks/useFileSystem"
import runTerminalCommand from "@hooks/runTerminalCommand"
import TerminalHistory from "@components/TerminalHistory"
import TerminalInputLine from "@components/TerminalInputLine"
import styles from "./Terminal.module.css"
import PropTypes from "prop-types"

import TerminalFetch from "@components/TerminalFetch"

const USER = "jose"
const HOST = "portfolio"

function parsePath(pathArr) {
  return pathArr.length === 0 ? "~" : "~/" + pathArr.join("/")
}

export default function Terminal({ onClose }) {
  const { getNode, setFile, listDir } = useFileSystem()
  const [cwd, setCwd] = useState([])
  const [history, setHistory] = useState([
    {
      text: <TerminalFetch />,
    },
    {
      prompt: true, // Marker for two-line style
      userHost: `${USER}@${HOST}`,
      cwd: [],
      text: "Type 'help' for a list of commands.",
    },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef()

  const handleCommand = (cmd) => {
    if (cmd.trim() === "clear") {
      setHistory([])
      return
    }

    const { output, newCwd } = runTerminalCommand(cmd, {
      cwd,
      setCwd,
      getNode,
      setFile,
    })
    
    // Create the history entry for the command itself
    const commandEntry = { 
      prompt: true, 
      transient: true,
      userHost: `${USER}@${HOST}`, 
      cwd: [...cwd], 
      text: cmd 
    }

    if (newCwd !== undefined) setCwd(newCwd)
    
    setHistory((prev) => [
      ...prev,
      commandEntry,
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
          listDir={listDir}
          getNode={getNode}
        />
      </div>
    </Window>
  )
}

Terminal.propTypes = {
  onClose: PropTypes.func.isRequired,
}
