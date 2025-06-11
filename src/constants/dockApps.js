import { iconList } from "@constants/iconList"
import About from "@pages/About"
import Projects from "@pages/Projects"
import FAQ from "@pages/FAQ"
import Terminal from "@pages/Terminal"
import Contact from "@pages/Contact"

export const dockApps = [
  {
    key: "about",
    label: "About",
    icon: iconList.about,
    component: About,
  },
  {
    key: "projects",
    label: "Projects",
    icon: iconList.projects,
    component: Projects,
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
