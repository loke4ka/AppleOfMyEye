import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.sectionTitleParent}>
        <h1 className={styles.sectionTitle}>Features:</h1>
        <div className={styles.description}>
          The main features of the mobile application
        </div>
      </div>
      <div className={styles.membershipOrganizatiosParent}>
        <div className={styles.membershipOrganizatios}>
          <div className={styles.icon}>
            <div className={styles.iconChild} />
            <img className={styles.componentIcon} loading="eager" alt="" src="/icon1.png" />
          </div>
          <div className={styles.componentalarm}>
            <h2 className={styles.liveStreaming}>
              <p className={styles.live}>{`Live `}</p>
              <p className={styles.streaming}>Streaming</p>
            </h2>
            <div className={styles.ourVideoCall}>
              Our video call feature provides a quick and convenient connection
              to volunteers who are ready to help with any questions or tasks.
            </div>
          </div>
        </div>
        <div className={styles.nationalAssociations}>
          <img className={styles.icon1} loading="eager" alt="" src="/icon2.png"/>
          <div className={styles.artificialIntelligenceHelpParent}>
            <h2 className={styles.artificialIntelligenceHelp}>
              Artificial Intelligence Help:
            </h2>
            <div className={styles.ourIntegratedArtificial}>
              Our integrated artificial intelligence system helps blind and
              visually impaired users recognize the world around them through
              photographs.
            </div>
          </div>
        </div>
        <div className={styles.nationalAssociations1}>
          <button className={styles.icon2}>
            <div className={styles.iconItem} />
            <img className={styles.alarm01Icon} alt="" src="/alarm01.png"/>
          </button>
          <div className={styles.availabilityParent}>
            <h2 className={styles.availability}>
              <p className={styles.p}>{`24/7 `}</p>
              <p className={styles.availability1}>availability</p>
            </h2>
            <div className={styles.weTakeInto}>
              We take into account the preferences and requests of users to
              provide them with the most comfortable and effective experience
              using the application.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
