import FAQCard from "./FAQCard"

export default {
  title: "Components/FAQCard",
  component: FAQCard,
  parameters: {
    docs: {
      description: {
        component:
          "A single FAQ accordion card with a question and answer. Click to expand/collapse. Used in the FAQ page.",
      },
    },
  },
  argTypes: {
    question: { control: "text" },
    answer: { control: "text" },
    defaultOpen: { control: "boolean" },
  },
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

export const LongAnswer = Template.bind({})
LongAnswer.args = {
  question: "How do you keep your skills up to date?",
  answer:
    "I enjoy experimenting with new frameworks and languages, reading about best practices, and exploring different ways to solve problems. I regularly contribute to open source, follow tech blogs, and build side projects to stay sharp. I also participate in online communities and attend meetups when possible.",
  defaultOpen: false,
}

export const ShortAnswer = Template.bind({})
ShortAnswer.args = {
  question: "Are you open to freelance work?",
  answer: "Yes, feel free to reach out!",
  defaultOpen: false,
}
