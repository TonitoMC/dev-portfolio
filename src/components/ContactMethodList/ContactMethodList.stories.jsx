import ContactMethodList from "./ContactMethodList"
import { iconList } from "@constants/iconList"

export default {
  title: "Components/ContactMethodList",
  component: ContactMethodList,
  parameters: {
    docs: {
      description: {
        component:
          "A vertical list of ContactMethodCard components, each showing a contact method with icon, label, value, and link. Used in the Contact page.",
      },
    },
  },
}

const methods = [
  {
    icon: "email",
    label: "Email",
    value: "joseameridac@gmail.com",
    href: "mailto:joseameridac@gmail.com",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/tonitomc",
    href: "https://github.com/tonitomc",
  },
]

export const TwoElements = () => (
  <ContactMethodList
    methods={methods.map((method) => {
      const Icon = iconList[method.icon]
      return {
        ...method,
        icon: Icon ? <Icon /> : null,
      }
    })}
  />
)
