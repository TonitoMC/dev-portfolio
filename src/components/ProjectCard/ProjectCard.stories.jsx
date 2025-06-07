import ProjectCard from "./ProjectCard";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Personal Portfolio",
  description:
    "A beautiful, interactive portfolio built with React and CSS Grid. Features a tiling window manager-inspired UI and a custom dock.",
  learned:
    "Advanced CSS Grid, React hooks, accessibility best practices, and theming with CSS variables.",
  onClick: () => alert("Project clicked!"),
};
