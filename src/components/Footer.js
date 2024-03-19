import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.links}>
      <div className={styles.col1}>
        <div className={styles.company}>Company</div>
        <div className={styles.listItems}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.support}>Support</div>
        <div className={styles.listItems1}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
      <div className={styles.col3}>
        <div className={styles.stayUpTo}>Stay up to date</div>
        <div className={styles.emailInputField}>
          <div className={styles.inputFieldBg} />
          <img
            className={styles.essentialIconsSend}
            alt=""
            src="/essential-icons--send.svg"
          />
          <div className={styles.yourEmailAddress}>Your email address</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
