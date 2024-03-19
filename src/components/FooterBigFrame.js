import styles from "./FooterBigFrame.module.css";

const FooterBigFrame = () => {
  return (
    <div className={styles.footerBigFrame}>
      <h2 className={styles.appleOfMy}>Apple of my eye</h2>
      <div className={styles.questionFrame}>
        <div className={styles.copyright2024}>
          Copyright © 2024 Apple of my eye
        </div>
        <div className={styles.allRightsReserved}>All rights reserved</div>
      </div>
      <div className={styles.frameSocialIconsText}>
        <img
          className={styles.socialIcons}
          loading="eager"
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

export default FooterBigFrame;
