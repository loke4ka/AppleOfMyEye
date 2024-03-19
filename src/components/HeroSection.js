import NationalAssociations from "./NationalAssociations";
import MembershipOrganizatios from "./MembershipOrganizatios";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.membershipIcons}>
        <div className={styles.nationalAssociations}>
          <div className={styles.icon}>
            <div className={styles.icon1}>
              <input className={styles.iconChild} type="text" />
              <img
                className={styles.icon2}
                loading="eager"
                alt=""
                src="/icon3.svg"
              />
            </div>
          </div>
          <div className={styles.label}>
            <h1 className={styles.interactionWithTechnology}>
              Interaction with technology
            </h1>
            <div className={styles.settingUpHousehold}>
              Setting up household appliances, using household appliances and
              other electronic devices.
            </div>
          </div>
        </div>
        <NationalAssociations
          icon="/icon4.svg"
          choosingClothes="Help in choosing gifts"
          getHelpChoosingClothesByD="Determining the appearance of the product, packaging and other details"
          propPadding="24px 16px"
          propAlignSelf="unset"
          propWidth="231px"
          propWidth1="unset"
          propAlignSelf1="stretch"
        />
        <MembershipOrganizatios
          readingTheText="Assistance in filling out forms and documents"
          volunteersCanHelpTheBlind="Users can get help in filling out forms, questionnaires and other documents correctly."
        />
      </div>
      <h1 className={styles.sectionTitle}>
        And there are many such moments when we can help with everyday tasks
        that seem logical to us.
      </h1>
    </section>
  );
};

export default HeroSection;
