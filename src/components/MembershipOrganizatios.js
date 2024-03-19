import styles from "./MembershipOrganizatios.module.css";

const MembershipOrganizatios = ({
  readingTheText,
  volunteersCanHelpTheBlind,
}) => {
  return (
    <div className={styles.membershipOrganizatios}>
      <button className={styles.icon}>
        <div className={styles.iconFrame}>
          <div className={styles.iconFrameChild} />
          <img className={styles.icon1} alt="" src="/icon.svg" />
        </div>
      </button>
      <div className={styles.text}>
        <h1 className={styles.readingTheText}>{readingTheText}</h1>
        <div className={styles.volunteersCanHelp}>
          {volunteersCanHelpTheBlind}
        </div>
      </div>
    </div>
  );
};

export default MembershipOrganizatios;
