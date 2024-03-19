import FrameWrapper from "../components/FrameWrapper";
import FrameLabel from "../components/FrameLabel";
import FooterBigFrame from "../components/FooterBigFrame";
import StayUpToDateText from "../components/StayUpToDateText";
import styles from "./FAQ1.module.css";

const FAQ = () => {
  return (
    
    <div className={styles.faq}>
      <section className={styles.fAQContainer}>
        <FrameWrapper />
        <FrameLabel />
      </section>
      <section className={styles.footerFrame}>
        <div className={styles.letNextcentDoWorkButton}>
          <h1 className={styles.letNextcentDo}>
            "Apple of My Eye: Sharing Perspectives, Connecting Hearts."
          </h1>
          <button className={styles.button}>
            <div className={styles.label}>Download</div>
            <img
              className={styles.arrowsDirectionsright}
              alt=""
              src="/16arrows--directionsright@2x.png"
            />
          </button>
        </div>
        <footer className={styles.footerBig4}>
          <FooterBigFrame />
          <StayUpToDateText />
        </footer>
      </section>
    </div>
  );
};

export default FAQ;
