import React from "react"

export function linkify(text) {
  if (!text) return null
  const urlRegex = /((https?:\/\/|mailto:)[^\s]+)/g
  const lines = text.split("\n")

  return lines.map((line, lineIdx) => {
    const parts = []
    let lastIndex = 0
    let match

    while ((match = urlRegex.exec(line)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index))
      }
      // Add the link
      const url = match[0]
      let display = url
      if (url.startsWith("mailto:")) {
        display = url.replace(/^mailto:/, "")
      } else if (url.startsWith("http")) {
        display = url.replace(/^https?:\/\//, "")
      }
      parts.push(
        <a
          key={match.index}
          href={url}
          target={url.startsWith("http") ? "_blank" : undefined}
          rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{ color: "var(--nord8)", textDecoration: "underline" }}
        >
          {display}
        </a>
      )
      lastIndex = match.index + url.length
    }
    // Add any remaining text after the last link
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex))
    }
    return (
      <React.Fragment key={lineIdx}>
        {parts}
        {lineIdx < lines.length - 1 ? <br /> : null}
      </React.Fragment>
    )
  })
}
