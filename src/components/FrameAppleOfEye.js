import styles from "./FrameAppleOfEye.module.css";

const FrameAppleOfEye = () => {
  return (
    <div className={styles.frameAppleOfEye}>
      <h1 className={styles.appleOfMy}>Apple of my eye</h1>
      <div className={styles.copyrightC}>
        <div className={styles.copyright2024}>
          Copyright © 2024 Apple of my eye
        </div>
        <div className={styles.allRightsReserved}>All rights reserved</div>
      </div>
      <div className={styles.frameSocialIcons}>
        <img className={styles.socialIcons}  loading="eager" alt="" src="/socialIcon1.png"/>
        <img className={styles.socialIcons1} loading="eager" alt="" src="/socialIcon2.png"/>
        <img className={styles.socialIcons2} loading="eager" alt="" src="/socialIcon3.png"/>
        <img className={styles.socialIcons3} loading="eager" alt="" src="/socialIcon4.png"/>
      </div>
    </div>
  );
};

export default FrameAppleOfEye;
