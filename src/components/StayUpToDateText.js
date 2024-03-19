import styles from "./StayUpToDateText.module.css";

const StayUpToDateText = () => {
  return (
    <div className={styles.stayUpToDateText}>
      <div className={styles.frameCompany}>
        <div className={styles.company}>Company</div>
        <div className={styles.frameAboutusTermsOfService}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <div className={styles.frameCompany1}>
        <div className={styles.support}>Support</div>
        <div className={styles.termsOfServiceParent}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
      <div className={styles.frameStayUpToDate}>
        <div className={styles.stayUpTo}>Stay up to date</div>
        <div className={styles.emailInputField}>
          <div className={styles.inputFieldBg} />
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

export default StayUpToDateText;
