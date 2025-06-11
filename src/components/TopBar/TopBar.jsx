import PropTypes from "prop-types"
import TopBarElement from "@components/TopBarElement"
import { iconList } from "@constants/iconList"
import styles from "./TopBar.module.css"

const WifiIcon = iconList.wifi
const VolumeIcon = iconList.volume
const BatteryIcon = iconList.battery
const SettingsIcon = iconList.settings

function TopBar({ elements }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.leftSection}>
        <span className={styles.path}>~/portfolio</span>
        <div className={styles.divider} />
        <span className={styles.branch}>main*</span>
        <div className={styles.divider} />
        <span className={styles.branch}>B.Sc. Computer Science</span>
      </div>
      <div className={styles.rightSection}>
        {elements.map((app) => {
          const Icon = app.icon
          return (
            <TopBarElement
              key={app.key}
              icon={Icon ? <Icon className={styles.icon} /> : null}
              ariaLabel={app.ariaLabel}
              description={app.description}
              link={app.link}
              linkLabel={app.linkLabel}
            />
          )
        })}
        <div className={styles.divider} />
        <WifiIcon className={styles.icon} />
        <VolumeIcon className={styles.icon} />
        <BatteryIcon className={styles.icon} />
        <SettingsIcon className={styles.icon} />
      </div>
    </div>
  )
}

TopBar.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape(TopBarElement.propTypes)).isRequired,
}

export default TopBar
