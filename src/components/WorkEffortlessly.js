import styles from "./WorkEffortlessly.module.css";

const WorkEffortlessly = () => {
  return (
    <section className={styles.workEffortlessly}>
      <div className={styles.heroSection}>
        <div className={styles.frameCompany}>
          <div className={styles.text}>
            <h1 className={styles.appleOfMyContainer}>
              <p className={styles.appleOfMy}>{`Apple of my `}</p>
              <p className={styles.eye}>eye</p>
            </h1>
            <div className={styles.connectsPeopleIn}>
              Connects people in need of visual support with volunteers anywhere
              in the world through real-time video and artificial intelligence.
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.label}>Download</div>
          </button>
        </div>
        <img className={styles.icon} loading="eager" alt="" src="/WorkEffort.png" />
        <div className={styles.dot}>
          <div className={styles.componentAlarm} />
          <div className={styles.componentAlarm1} />
          <div className={styles.componentAlarm2} />
        </div>
      </div>
    </section>
  );
};

export default WorkEffortlessly;
