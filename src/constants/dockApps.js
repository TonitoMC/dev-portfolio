import { iconList } from "@constants/iconList"
import About from "@pages/About"
import Projects from "@pages/Projects"
import FAQ from "@pages/FAQ"
import Terminal from "@pages/Terminal"
import Contact from "@pages/Contact"
import FileManager from "@pages/FileManager"

export const dockApps = [
  {
    key: "about",
    label: "About",
    icon: iconList.about,
    component: About,
  },
  {
    key: "projects-explorer",
    label: "Projects",
    icon: iconList.projects,
    component: FileManager,
  },
  {
    key: "faq",
    label: "FAQ",
    icon: iconList.faq,
    component: FAQ,
  },
  {
    key: "contact",
    label: "Contact",
    icon: iconList.contact,
    component: Contact,
  },
  {
    key: "terminal",
    label: "Terminal",
    icon: iconList.terminal,
    component: Terminal,
  },
]
