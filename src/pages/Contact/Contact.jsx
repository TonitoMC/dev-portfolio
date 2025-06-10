import { useEffect, useState } from "react"
import Window from "@components/Window/Window"
import ContactMethodList from "@components/ContactMethodList/ContactMethodList"
import PropTypes from "prop-types"
import { iconList } from "@constants/iconList"

export default function Contact({ onClose }) {
  const [methods, setMethods] = useState([])

  useEffect(() => {
    fetch("/contact.json")
      .then((res) => res.json())
      .then((data) => {
        setMethods(
          data.map((method) => {
            const Icon = iconList[method.icon]
            return {
              ...method,
              icon: Icon ? <Icon /> : null,
            }
          })
        )
      })
  }, [])

  return (
    <Window title="Contact" onClose={onClose}>
      <main className="windowContent">
        <h1>Contact</h1>
        <ContactMethodList methods={methods} />
      </main>
    </Window>
  )
}

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
}
