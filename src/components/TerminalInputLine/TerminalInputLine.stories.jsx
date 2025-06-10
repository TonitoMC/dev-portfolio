import { useState, useRef } from "react"
import TerminalInputLine from "./TerminalInputLine"

export default {
  title: "Components/TerminalInputLine",
  component: TerminalInputLine,
}

export const Default = () => {
  const [input, setInput] = useState("")
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`You typed: ${input}`)
    setInput("")
  }

  return (
    <div
      style={{
        background: "rgba(44, 51, 63, 0.95)", // nord0-ish
        padding: "2rem",
        width: 500,
        fontFamily: '"Fira Mono", "Fira Code", monospace',
      }}
    >
      <TerminalInputLine
        cwd={["projects"]}
        user="jose"
        host="portfolio"
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </div>
  )
}
