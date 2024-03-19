import styles from "./AboutUsContactSupportTerms.module.css";

const AboutUsContactSupportTerms = () => {
  return (
    <div className={styles.aboutUsContactSupportTerms}>
      <div className={styles.frameCompany}>
        <h3 className={styles.company}>Company</h3>
        <div className={styles.aboutUsTermsOfService}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <div className={styles.frameCompany1}>
        <h3 className={styles.support}>Support</h3>
        <div className={styles.termsOfServiceParent}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
      <div className={styles.stayUpdated}>
        <h3 className={styles.stayUpTo}>Stay up to date</h3>
        <div className={styles.emailInputField}>
          <input
            className={styles.yourEmailAddress}
            placeholder="Your email address"
            type="text"
          />
          <img
            className={styles.essentialIconsSend}
            alt=""
            src="/essential-icons--send.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsContactSupportTerms;
