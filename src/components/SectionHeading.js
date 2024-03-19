import styles from "./SectionHeading.module.css";

const SectionHeading = () => {
  return (
    <section className={styles.sectionHeading}>
      <div className={styles.unlock}>
        <div className={styles.unlock1}>
          <img className={styles.unlockChild} loading="eager" alt="" src="/SectionHeading22.png"/>
          <div className={styles.millionBlindParent}>
            <div className={styles.millionBlind}>
              <div className={styles.whenJoiningThe}>Volunteers</div>
              <h1 className={styles.provideAssistanceToContainer}>
                <p className={styles.provideAssistanceTo}>
                  Provide assistance to individuals during their times of
                  greatest need.
                </p>
              </h1>
              <div className={styles.whenJoiningThe1}>
                By becoming a Apple of my eye volunteer, you have the
                opportunity to assist individuals who are blind or have low
                vision precisely when they need it most. Join our community and
                make a positive impact on someone's life today.
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.label}>Download app</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeading;
