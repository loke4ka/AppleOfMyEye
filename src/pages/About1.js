import InnerFrame from "../components/InnerFrame";
import FrameComponent1 from "../components/FrameComponent1";
import HeroSection from "../components/HeroSection";
import PerspectiveConnectorContainer from "../components/PerspectiveConnectorContainer";
import SocialIcons from "../components/SocialIcons";
import AboutUsContactSupportTerms from "../components/AboutUsContactSupportTerms";
import styles from "./About1.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <InnerFrame />
      <section className={styles.heroSectionWrapper}>
        <div className={styles.heroSection}>
          <h1 className={styles.theMissionOfContainer}>
            <p
              className={styles.theMissionOf}
            >{`The mission of Apple of My Eye is to improve the quality of life of blind people in Kazakhstan and beyond. `}</p>
            <p className={styles.thereAreAbout90ThousandBl}>
              <span className={styles.thereAreAbout}>There are about</span>
              <span className={styles.thousand}> 90 thousand</span>
              <span
                className={styles.blindPeopleIn}
              >{` blind people in Kazakhstan, including `}</span>
              <span className={styles.thousandChildren}>
                6 thousand children
              </span>
              <span>{`. `}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.weStriveTo}>
              We strive to create a unique space where volunteers and the blind
              can interact, share experiences and support each other.
            </p>
          </h1>
        </div>
      </section>
      <section className={styles.sectionTitleParent}>
        <h1 className={styles.sectionTitle}>
          Provides assistance to visually impaired people in various situations
        </h1>
        <div className={styles.description}>
          What kind of situations are there?
        </div>
      </section>
      <FrameComponent1 />
      <HeroSection />
      <PerspectiveConnectorContainer
        propPadding="var(--padding-13xl) var(--padding-xl) var(--padding-13xl) var(--padding-2xl)"
        propPadding1="var(--padding-sm) var(--padding-12xl) var(--padding-sm) var(--padding-13xl)"
      />
      <footer className={styles.footerBig4}>
        <SocialIcons />
        <AboutUsContactSupportTerms />
      </footer>
    </div>
  );
};

export default About;
