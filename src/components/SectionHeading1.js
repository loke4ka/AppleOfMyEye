import styles from "./SectionHeading1.module.css";

const SectionHeading1 = () => {
  return (
    <section className={styles.sectionHeading}>
      <div className={styles.unlock}>
        <div className={styles.sectionTitle}>
          <div className={styles.detailsNumberLabel}>
            
            <div className={styles.membershipOrganizations}>
              <img className={styles.backgroundSimpleIcon} alt="" src="/SectionHeading12.png" />
            </div>
            
          </div>
          <img className={styles.floorIcon} loading="eager" alt="" />
        </div>
        <div className={styles.appleofmyeye}>
          <div className={styles.oneEventCalendar}>Blind and low-vision</div>
          <div className={styles.frameContent}>
            <h1 className={styles.effortlesslyObtainVisual}>
              Effortlessly obtain visual information.
            </h1>
            <div
              className={styles.oneEventCalendar1}
            >{`Utilize your smartphone to seek video assistance anytime, whether it's day or night. Connect with a volunteer, capture an image, and let Apple of my eye provide a description. `}</div>
          </div>
          <button className={styles.button}>
            <div className={styles.label1}>Download app</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionHeading1;
