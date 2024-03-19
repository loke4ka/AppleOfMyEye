import FrameComponent7 from "../components/FrameComponent7";
import InnerFrame from "../components/InnerFrame";

import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Community.module.css";

const Community = () => {
  return (
    <div className={styles.community}>
      <InnerFrame />
      <FrameComponent6 />
      <section className={styles.frameParent}>
        <div className={styles.sectionTitleWrapper}>
          <h1 className={styles.sectionTitle}>Organizations</h1>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.description}>
          representing the interests of the blind
        </div>
      </section>
      <FrameComponent5 />
      <section className={styles.communityInner}>
        <div className={styles.branchesOfNgoKosParent}>
          <h1 className={styles.branchesOfNgo}>Branches of NGO "KOS"</h1>
          <div className={styles.lineContainer}>
            <div className={styles.frameItem} />
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <section className={styles.letNextcentDoTheWorkSoYoParent}>
        <h1 className={styles.letNextcentDo}>
          "Apple of My Eye: Sharing Perspectives, Connecting Hearts."
        </h1>
        <div className={styles.buttonLabelSend}>
          <button className={styles.button}>
            <div className={styles.label}>Download</div>
            <div className={styles.arrowsDirectionsrightWrapper}>
              <img
                className={styles.arrowsDirectionsright}
                alt=""
                src="/16arrows--directionsright@2x.png"
              />
            </div>
          </button>
        </div>
      </section>
      <footer className={styles.footerBig4}>
        <FrameComponent3 />
        <FrameComponent2 />
      </footer>
    </div>
  );
};

export default Community;
