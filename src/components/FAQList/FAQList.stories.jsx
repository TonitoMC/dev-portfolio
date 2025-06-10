import FAQList from "./FAQList"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I work primarily with React, TypeScript, Python, and modern CSS. I’m also comfortable with Node.js, Linux, and automation tools.",
  },
  {
    question: "Are you open to freelance or contract work?",
    answer: "Yes! I’m always interested in new opportunities. Feel free to reach out via the contact section.",
  },
  {
    question: "How do you approach new projects?",
    answer: "I start by understanding the client’s goals, then plan, prototype, and iterate quickly with feedback.",
  },
  {
    question: "Can I see the code for your projects?",
    answer: "Most of my projects are open source on my GitHub. Some client work is private.",
  },
  {
    question: "What’s your favorite project so far?",
    answer: "Probably my personal portfolio! It’s a playground for new ideas and tech.",
  },
]

export default {
  title: "Components/FAQList",
  component: FAQList,
}

export const Default = () => <FAQList faqs={faqs} />
