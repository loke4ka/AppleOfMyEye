import CountsDetails from "../components/CountsDetails";
import WorkEffortlessly from "../components/WorkEffortlessly";
import SectionHeading1 from "../components/SectionHeading1";
import SectionHeading from "../components/SectionHeading";
import FrameParent from "../components/FrameParent";
import FrameComponent from "../components/FrameComponent";
import FrameSupport from "../components/FrameSupport";
import FrameAppleOfEye from "../components/FrameAppleOfEye";
import FrameInfoPanel from "../components/FrameInfoPanel";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <CountsDetails />
      <WorkEffortlessly />
      <SectionHeading1 />
      <SectionHeading />
      <FrameParent />
      <FrameComponent />
      <FrameSupport />
      <section className={styles.callToAction}>
        <h1 className={styles.letNextcentDo}>
          "Apple of My Eye: Sharing Perspectives, Connecting Hearts."
        </h1>
        <button className={styles.button}>
          <div className={styles.label}>Download</div>
          <img className={styles.arrowsDirectionsright} alt="" src="/arrow01.png"/>
        </button>
      </section>
      <footer className={styles.footerBig4}>
        <FrameAppleOfEye />
        <FrameInfoPanel />
      </footer>
    </div>
  );
};

export default Home;
