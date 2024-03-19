import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.inputFieldBGBackgroundCan}>
      <h1 className={styles.appleOfMy}>Apple of my eye</h1>
      <div className={styles.mailingList}>
        <div className={styles.copyright2024}>
          Copyright © 2024 Apple of my eye
        </div>
        <div className={styles.allRightsReserved}>All rights reserved</div>
      </div>
      <div className={styles.socialIconsParent}>
        <img
          className={styles.socialIcons}
          loading="lazy"
          alt=""
          src="/social-icons.svg"
        />
        <img className={styles.socialIcons1} alt="" src="/social-icons1.svg" />
        <img className={styles.socialIcons2} alt="" src="/social-icons2.svg" />
        <img className={styles.socialIcons3} alt="" src="/social-icons3.svg" />
      </div>
    </div>
  );
};

export default FrameComponent3;
