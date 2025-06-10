import TerminalHistory from "./TerminalHistory"

export default {
  title: "Components/TerminalHistory",
  component: TerminalHistory,
  parameters: {
    docs: {
      description: {
        component: "Displays the command and output history for the terminal. Each line can be a prompt or output.",
      },
    },
  },
}

const history = [
  { prompt: "jose@portfolio:~$", text: "ls" },
  { text: "about.txt  projects  faq  contact", type: "output" },
  { prompt: "jose@portfolio:~$", text: "cat about.txt" },
  { text: "I'm Jose, a Computer Scientist and developer...", type: "output" },
  { prompt: "jose@portfolio:~$", text: "cd projects" },
  { prompt: "jose@portfolio:~/projects$", text: "ls" },
  { text: "Portfolio.txt  SeriesTrackerAPI.txt  HTMLOnlyStory.txt", type: "output" },
  { prompt: "jose@portfolio:~/projects$", text: "cat Portfolio.txt" },
  { text: "This portfolio is a Unix-inspired, tiling window manager built with React, Vite, and Bun.", type: "output" },
]

export const Default = () => (
  <div
    style={{
      background: "rgba(44, 51, 63, 0.95)",
      padding: "2rem",
      width: 600,
      minHeight: 300,
      fontFamily: '"Fira Mono", "Fira Code", monospace',
    }}
  >
    <TerminalHistory history={history} />
  </div>
)
