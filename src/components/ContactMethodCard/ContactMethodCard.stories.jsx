import ContactMethodCard from "./ContactMethodCard"
import { iconList } from "@constants/iconList"

export default {
  title: "Components/ContactMethodCard",
  component: ContactMethodCard,
  parameters: {
    docs: {
      description: {
        component: "A card for a contact method, with icon, label, value, and link. Used in the Contact page.",
      },
    },
  },
}

const Template = (args) => <ContactMethodCard {...args} />

export const Email = Template.bind({})
Email.args = {
  icon: <iconList.email />,
  label: "Email",
  value: "joseameridac@gmail.com",
  href: "mailto:joseameridac@gmail.com",
}

export const GitHub = Template.bind({})
GitHub.args = {
  icon: <iconList.github />,
  label: "GitHub",
  value: "github.com/tonitomc",
  href: "https://github.com/tonitomc",
}
