import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.finalTouch}>
      <div className={styles.triggerContainer}>
        <div className={styles.company}>Company</div>
        <div className={styles.company1}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <div className={styles.triggerContainer1}>
        <div className={styles.support}>Support</div>
        <div className={styles.termsOfServiceParent}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
      <div className={styles.contactUs1}>
        <div className={styles.stayUpTo}>Stay up to date</div>
        <div className={styles.emailInputField}>
          <div className={styles.inputFieldBg} />
          <input
            className={styles.yourEmailAddress}
            placeholder="Your email address"
            type="text"
          />
          <div className={styles.sendIcon}>
            <img
              className={styles.essentialIconsSend}
              alt=""
              src="/essential-icons--send.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
