import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <section className={styles.heroSectionWrapper}>
      <div className={styles.heroSection}>
        <div className={styles.childrenSidebar}>
          <div className={styles.text}>
            <h1 className={styles.supportForTheContainer}>
              <span>{`Support for `}</span>
              <span className={styles.theBlind}>the blind</span>
              <span> and people with disabilities!</span>
            </h1>
            <div className={styles.canFindThe}>
              can find the information, resources and support they need.
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.label}>more</div>
          </button>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src="/@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent6;
