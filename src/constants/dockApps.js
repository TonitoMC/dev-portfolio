import AboutIcon from "../icons/AboutIcon";
import ProjectsIcon from "../icons/ProjectsIcon";
import FAQIcon from "../icons/FAQIcon";
import ContactIcon from "../icons/ContactIcon";
import TerminalIcon from "../icons/TerminalIcon";
import NotepadIcon from "../icons/NotepadIcon";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import FAQ from "../pages/FAQ/FAQ";
import Terminal from "../pages/Terminal/Terminal"
import Welcome from "../pages/Welcome/Welcome"

export const dockApps = [
  {
    key: "about",
    label: "About",
    icon: AboutIcon,
    component: About,
  },
  {
    key: "projects",
    label: "Projects",
    icon: ProjectsIcon,
    component: Projects,
  },
  {
    key: "faq",
    label: "FAQ",
    icon: FAQIcon,
    component: FAQ,
  },
  {
    key: "contact",
    label: "Contact",
    icon: ContactIcon,
  },
  {
    key: "terminal",
    label: "Terminal",
    icon: TerminalIcon,
    component: Terminal,
  },
  {
    key: "notepad",
    label: "Notepad",
    icon: NotepadIcon,
  },

];
