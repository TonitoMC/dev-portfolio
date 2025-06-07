import { useRef, useState } from "react";
import styles from "./TopBar.module.css";
import GitHubIcon from "../../icons/GithubIcon";
import TopBarElement from "../TopBarElement/TopBarElement";
import WifiIcon from "../../icons/WifiIcon";
import VolumeIcon from "../../icons/VolumeIcon";
import BatteryIcon from "../../icons/BatteryIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import CalendarIcon from "../../icons/CalendarIcon";

import EmailIcon from "../../icons/EmailIcon";

function TopBar() {
  const time = "15:37";

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
        <TopBarElement
          icon={<GitHubIcon className={styles.icon} />}
          link="https://github.com/yourusername"
          ariaLabel="GitHub"
          description="Here's all my GitHub projects!"
          linkLabel="github.com/yourusername"
        />
        <TopBarElement
          icon={<EmailIcon className={styles.icon} />}
          link="mailto:your@email.com"
          ariaLabel="Email"
          description="Email me anytime!"
          linkLabel="your@email.com"
        />
        <div className={styles.divider} />
        <TopBarElement
          icon={<WifiIcon className={styles.icon} />}
          ariaLabel="WiFi"
        />
        <TopBarElement
          icon={<VolumeIcon className={styles.icon} />}
          ariaLabel="Volume"
        />
        <TopBarElement
          icon={<BatteryIcon className={styles.icon} />}
          ariaLabel="Battery"
        />
        <TopBarElement
          icon={<SettingsIcon className={styles.icon} />}
          ariaLabel="Settings"
        />

      </div>
    </div>
  );
}

export default TopBar;
