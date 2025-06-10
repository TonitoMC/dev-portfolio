import ProjectCard from "./ProjectCard"

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  parameters: {
    docs: {
      description: {
        component: "A card displaying a project with title, description, and what you learned.",
      },
    },
  },
}

const Template = (args) => <ProjectCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "This Portfolio",
  description: "A Unix-inspired, tiling window manager portfolio built with React, Vite, and Bun.",
  learned: "Frontend architecture, advanced CSS, Framer Motion, and building a component-driven design system.",
  onClick: () => alert("Project clicked!"),
}
