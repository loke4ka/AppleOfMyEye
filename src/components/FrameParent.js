import styles from "./FrameParent.module.css";

const FrameParent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.achievements}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionHeading1}>
            <h1 className={styles.sectionTitle}>
              <span>{`Algorithms were selected for `}</span>
              <span className={styles.variousAspectsOf}>
                various aspects of the application.
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.counts}>
          <div className={styles.details}>
            <b className={styles.number}>Video streaming algorithm:</b>
            <div className={styles.label}>
              To provide real time video communication, a peer-to-peer streaming
              algorithm has been implemented to provide low latency and
              high-quality video transmission.
            </div>
          </div>
          <div className={styles.details1}>
            <b className={styles.number1}>Text-to-Speech Algorithm:</b>
            <div className={styles.label1}>
              Textual information is converted into spoken information using a
              text-to-speech synthesis algorithm.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameParent;
