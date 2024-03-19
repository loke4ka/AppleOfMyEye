import Question from "./Question";
import styles from "./FrameLabel.module.css";

const FrameLabel = () => {
  return (
    <div className={styles.frameLabel}>
      <div className={styles.fAQContainerLabel}>
        <h3 className={styles.faq}>FAQ</h3>
        <div
          className={styles.youCanAlways}
        >{`You can always ask any questions in a convenient way, but the answers to the most common questions are already collected below `}</div>
      </div>
      <div className={styles.qnASection}>
        <div className={styles.question}>
          <div className={styles.appInfo}>
            <b className={styles.howDoesThe}>
              How does the Apple of My Eye app work?
            </b>
            <div className={styles.appleOfMy}>
              "Apple of My Eye" is a mobile app designed to help blind people
              with everyday tasks by giving them the ability to connect with
              volunteers via video call and receive assistance through
              artificial intelligence features.
            </div>
          </div>
          <img
            className={styles.plus01Icon}
            loading="eager"
            alt=""
            src="/plus01.svg"
          />
        </div>
        <Question howDoesTheAppleOfMyEyeApp="How can I find a volunteer to help?" />
        <Question
          howDoesTheAppleOfMyEyeApp="Can I volunteer?"
          propMinHeight="32px"
        />
        <Question
          howDoesTheAppleOfMyEyeApp="What operating systems are supported by the application?"
          propMinHeight="unset"
        />
        <Question
          howDoesTheAppleOfMyEyeApp="How can I contact support in case of problems?"
          propMinHeight="unset"
        />
        <Question
          howDoesTheAppleOfMyEyeApp="How often is the app updated?"
          propMinHeight="32px"
        />
      </div>
    </div>
  );
};

export default FrameLabel;
