import Dock from "./Dock"
import { iconList } from "@constants/iconList"

const apps = [
  {
    key: "about",
    label: "About",
    icon: iconList.about,
  },
  {
    key: "projects",
    label: "Projects",
    icon: iconList.projects,
  },
  {
    key: "faq",
    label: "FAQ",
    icon: iconList.faq,
  },
  {
    key: "contact",
    label: "Contact",
    icon: iconList.contact,
  },
  {
    key: "terminal",
    label: "Terminal",
    icon: iconList.terminal,
  },
]

export default {
  title: "Components/Dock",
  component: Dock,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--nord0, #222)",
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <Dock apps={apps} onAppSelect={(key) => alert(`Clicked: ${key}`)} />
