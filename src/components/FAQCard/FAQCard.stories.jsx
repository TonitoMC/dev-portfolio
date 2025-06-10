import FAQCard from "./FAQCard"

export default {
  title: "Components/FAQCard",
  component: FAQCard,
}

const Template = (args) => <FAQCard {...args} />

export const Default = Template.bind({})
Default.args = {
  question: "What technologies do you specialize in?",
  answer:
    "I work primarily with React, TypeScript, Python, and modern CSS. I’m also comfortable with Node.js, Linux, and automation tools.",
  defaultOpen: false,
}

export const OpenByDefault = Template.bind({})
OpenByDefault.args = {
  ...Default.args,
  defaultOpen: true,
}
