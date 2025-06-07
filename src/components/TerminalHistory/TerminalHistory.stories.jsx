import TerminalHistory from "./TerminalHistory";

export default {
  title: "Components/TerminalHistory",
  component: TerminalHistory,
};

const history = [
  { prompt: "jose@portfolio:~$", text: "ls" },
  { text: "about.txt  notes  projects  faq  contact", type: "output" },
  { prompt: "jose@portfolio:~$", text: "cat about.txt" },
  { text: "I'm Jose, a Computer Scientist and developer...", type: "output" },
  { prompt: "jose@portfolio:~$", text: "cat missing.txt" },
  { text: "No such file", type: "error" },
  { text: "Welcome to the portfolio terminal!", type: "info" },
];

export const Default = () => (
  <div style={{
    background: "rgba(44, 51, 63, 0.95)",
    padding: "2rem",
    width: 600,
    minHeight: 300,
    fontFamily: '"Fira Mono", "Fira Code", monospace'
  }}>
    <TerminalHistory history={history} />
  </div>
);
