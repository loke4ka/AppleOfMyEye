import styles from "./FrameSupport.module.css";

const FrameSupport = () => {
  return (
    <section className={styles.frameSupport}>
      <div className={styles.frameMembershipOrg}>
        <div className={styles.frameCopyright}>
          <b className={styles.million}>285 million</b>
          <div className={styles.blindLowVision}>{`Blind & low-vision`}</div>
          <button className={styles.socialIconsSocialMedia}>
            <div className={styles.support}>support</div>
          </button>
        </div>
        <div className={styles.frameCopyright1}>
          <b className={styles.b}>{`85,900 `}</b>
          <div className={styles.blindLowVisionContainer}>
            <p className={styles.blindLowVision1}>{`Blind & low-vision`}</p>
            <p className={styles.inTheKazakhstan}>in the Kazakhstan</p>
          </div>
          <button className={styles.supportWrapper}>
            <div className={styles.support1}>support</div>
          </button>
        </div>
        <div className={styles.frameCopyright2}>
          <h2 className={styles.kazakh}>{`Kazakh `}</h2>
          <div className={styles.language}>Language</div>
          <button className={styles.supportContainer}>
            <div className={styles.support2}>support</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameSupport;
