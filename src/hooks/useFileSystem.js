import { useState, useCallback, useEffect } from "react";

const ABOUT_TXT = "I'm Jose, a Computer Scientist and developer...";
const CONTACT_TXT = "Email: your@email.com";

function buildFS(notes, projects, faq) {
  return {
    "about.txt": ABOUT_TXT,
    notes: { ...notes },
    projects: { ...projects },
    faq: { ...faq },
    contact: { "contact.txt": CONTACT_TXT }
  };
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem("portfolioNotes")) || {};
  } catch {
    return {};
  }
}

function saveNotes(notes) {
  localStorage.setItem("portfolioNotes", JSON.stringify(notes));
}

export default function useFileSystem() {
  const [notes, setNotes] = useState(loadNotes);
  const [projects, setProjects] = useState({});
  const [faq, setFaq] = useState({});

  // Fetch projects and faq on every mount
  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => {
        const projFiles = {};
        data.forEach((project) => {
          const fileName = (project.title || "Untitled")
            .replace(/\s+/g, "") // Remove spaces
            .replace(/[^a-zA-Z0-9]/g, "") // Remove non-alphanum
            + ".txt";
          const content = [
            `Title: ${project.title}`,
            `Description: ${project.description}`,
            project.learned ? `What I learned: ${project.learned}` : "",
            project.url ? `URL: ${project.url}` : ""
          ].filter(Boolean).join("\n\n");
          projFiles[fileName] = content;
        });
        setProjects(projFiles);
      });

    fetch("/faq.json")
      .then(res => res.json())
      .then(data => {
        const faqFiles = {};
        data.forEach((f, i) => {
          faqFiles[`faq${i + 1}.txt`] = `Q: ${f.question}\nA: ${f.answer}\n`;
        });
        setFaq(faqFiles);
      });
  }, []);

  // Notes helpers
  const setNote = useCallback((file, content) => {
    const newNotes = { ...notes, [file]: content };
    setNotes(newNotes);
    saveNotes(newNotes);
  }, [notes]);

  // Build the virtual FS tree on every render
  const fs = buildFS(notes, projects, faq);

  // Get node by path array
  const getNode = useCallback((pathArr) => {
    return pathArr.reduce((node, part) => (node && node[part] !== undefined ? node[part] : null), fs);
  }, [fs]);

  // Set file content (only for notes)
  const setFile = useCallback((pathArr, content) => {
    if (pathArr[0] === "notes" && pathArr.length === 2) {
      setNote(pathArr[1], content);
    }
    // else: ignore, only notes are editable
  }, [setNote]);

  // List directory
  const listDir = useCallback((pathArr) => {
    const node = getNode(pathArr);
    if (node && typeof node === "object") {
      return Object.keys(node);
    }
    return [];
  }, [getNode]);

  // Read file
  const readFile = useCallback((pathArr) => {
    const node = getNode(pathArr);
    return typeof node === "string" ? node : null;
  }, [getNode]);

  return { fs, getNode, setFile, listDir, readFile };
}
