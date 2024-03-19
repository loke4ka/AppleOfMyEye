import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <h1 className={styles.appleOfMy}>Apple of my eye</h1>
      <div className={styles.aboutus}>
        <div className={styles.copyright2024}>
          Copyright © 2024 Apple of my eye
        </div>
        <div className={styles.allRightsReserved}>All rights reserved</div>
      </div>
      <div className={styles.footerFrame}>
        <img
          className={styles.socialIcons1}
          loading="eager"
          alt=""
          src="/social-icons.svg"
        />
        <img
          className={styles.socialIcons2}
          loading="eager"
          alt=""
          src="/social-icons1.svg"
        />
        <img
          className={styles.socialIcons3}
          loading="eager"
          alt=""
          src="/social-icons2.svg"
        />
        <img
          className={styles.socialIcons4}
          loading="eager"
          alt=""
          src="/social-icons3.svg"
        />
      </div>
    </div>
  );
};

export default SocialIcons;
