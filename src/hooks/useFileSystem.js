import { useState, useCallback, useEffect } from "react"

const ABOUT_TXT =
  "I'm Jose, a developer based in Guatemala who loves building software to solve real-world problems. I specialize in Go for backend (Echo, Gin, stdlib), React and vanilla JS for frontend, and I enjoy ricing my Arch Linux setup. I'm passionate about creative UI/UX, learning new tech, and always experimenting with new tools. When I'm not coding, I listen to metal, play shooters, and read books. Explore the site using the dock or terminal!"

function buildFS(projects, faq, contact) {
  return {
    "about.txt": ABOUT_TXT,
    projects: { ...projects },
    faq: { ...faq },
    contact: { ...contact },
  }
}

export default function useFileSystem() {
  const [projects, setProjects] = useState({})
  const [faq, setFaq] = useState({})
  const [contact, setContact] = useState({})

  // Fetch projects, faq, and contact on mount
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const projFiles = {}
        data.forEach((project) => {
          const fileName = (project.title || "Untitled").replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "") + ".txt"
          const content = [
            project.title,
            "",
            project.description,
            "",
            project.learned ? `What I learned: ${project.learned}` : "",
            project.url ? project.url : "",
          ]
            .filter(Boolean)
            .join("\n")
          projFiles[fileName] = content
        })
        setProjects(projFiles)
      })

    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        const text = data.map((f) => `Q: ${f.question}\nA: ${f.answer}\n`).join("\n")
        setFaq({ "faq.txt": text })
      })
    fetch("/contact.json")
      .then((res) => res.json())
      .then((data) => {
        const contactFiles = {}
        data.forEach((item) => {
          if (item.icon === "email") {
            contactFiles["email.txt"] = item.href // just the mailto link
          }
          if (item.icon === "github") {
            contactFiles["github.txt"] = item.href // just the URL
          }
        })
        setContact(contactFiles)
      })
  }, [])

  // Build the virtual FS tree on every render
  const fs = buildFS(projects, faq, contact)

  // Get node by path array
  const getNode = useCallback(
    (pathArr) => {
      return pathArr.reduce((node, part) => (node && node[part] !== undefined ? node[part] : null), fs)
    },
    [fs]
  )

  // Set file content (no-op, since no notes)
  const setFile = useCallback(() => {}, [])

  // List directory
  const listDir = useCallback(
    (pathArr) => {
      const node = getNode(pathArr)
      if (node && typeof node === "object") {
        return Object.keys(node)
      }
      return []
    },
    [getNode]
  )

  // Read file
  const readFile = useCallback(
    (pathArr) => {
      const node = getNode(pathArr)
      return typeof node === "string" ? node : null
    },
    [getNode]
  )

  return { fs, getNode, setFile, listDir, readFile }
}
