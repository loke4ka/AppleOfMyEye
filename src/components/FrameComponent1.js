import MembershipOrganizatios from "./MembershipOrganizatios";
import NationalAssociations from "./NationalAssociations";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.textWrapper}>
      <div className={styles.text}>
        <MembershipOrganizatios
          readingTheText="Reading the text"
          volunteersCanHelpTheBlind="Volunteers can help the blind to read labels on products, instructions, and other text materials."
        />
        <NationalAssociations
          icon="/icon1.svg"
          choosingClothes="Choosing clothes"
          getHelpChoosingClothesByD="Get help choosing clothes by distinguishing colors, styles and the compatibility of elements."
        />
        <div className={styles.nationalAssociations}>
          <div className={styles.icon}>
            <div className={styles.rectangleParent}>
              <input className={styles.frameChild} type="text" />
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/icon2.svg"
              />
            </div>
          </div>
          <div className={styles.helpWithCookingParent}>
            <h1 className={styles.helpWithCooking}>Help with cooking</h1>
            <div className={styles.volunteersCanHelp}>
              Volunteers can help a blind person find out the degree of
              readiness of food by checking through a camera.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
