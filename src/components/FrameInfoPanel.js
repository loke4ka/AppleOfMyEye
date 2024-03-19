import styles from "./FrameInfoPanel.module.css";

const FrameInfoPanel = () => {
  return (
    <div className={styles.frameInfoPanel}>
      <div className={styles.footerStayConnected}>
        <div className={styles.company}>Company</div>
        <div className={styles.aboutUsTermsOfServiceFram}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
      <div className={styles.footerStayConnected1}>
        <div className={styles.support}>Support</div>
        <div className={styles.termsOfServiceParent}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
      <div className={styles.stayUpToDateEmailInputFi}>
        <div className={styles.stayUpTo}>Stay up to date</div>
        <div className={styles.emailInputField}>
          <div className={styles.inputFieldBg} />
          <input
            className={styles.yourEmailAddress}
            placeholder="Your email address"
            type="text"
          />
          <img className={styles.essentialIconsSend} alt="" src="/essential-icons-send.png"/>
        </div>
      </div>
    </div>
  );
};

export default FrameInfoPanel;
