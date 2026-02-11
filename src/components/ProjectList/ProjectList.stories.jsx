import ProjectList from "./ProjectList"

export default {
  title: "Components/ProjectList",
  component: ProjectList,
  parameters: {
    docs: {
      description: {
        component:
          "A vertical list of ProjectCard components, each showing a project with title, description, and what you learned. Used in the Projects page.",
      },
    },
  },
}

const projects = [
  {
    title: "This Portfolio",
    description:
      "A Unix-inspired, tiling window manager portfolio built with React, Vite, Bun, and custom CSS. Features a terminal, dock, and dynamic pages.",
    learned: "Frontend architecture, advanced CSS, Framer Motion, and building a component-driven design system.",
    onClick: () => alert("Portfolio clicked!"),
  },
  {
    title: "HTML-Only Interactive Story",
    description: "A short interactive story about an abandoned mansion built using exclusively HTML.",
    learned: "Building simple web pages & writing semantic HTML.",
    onClick: () => alert("HTML-Only Interactive Story clicked!"),
  },
]

export const Default = () => <ProjectList projects={projects} />
