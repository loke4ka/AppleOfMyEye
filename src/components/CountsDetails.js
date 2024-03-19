import styles from "./CountsDetails.module.css";

const CountsDetails = () => {
  return (
    <header className={styles.countsDetails}>
      <b className={styles.appleOfMy}>APPLE OF MY EYE</b>
      <div className={styles.logo} />
      <div className={styles.membershipOrgIcon}>
        <div className={styles.label} style={{cursor: "pointer"}} onClick={() => window.location.href = "/"}>Home</div>
        <div className={styles.label1} style={{cursor: "pointer"}} onClick={() => window.location.href = "/about"}>About</div>
        <div className={styles.label3} style={{cursor: "pointer"}} onClick={() => window.location.href = "/faq"}>FAQ</div>
        <div className={styles.label2} style={{cursor: "pointer"}} onClick={() => window.location.href = "/Community"}>Community</div>
        <div className={styles.label4}>Download</div>
      </div>
    </header>
  );
};

export default CountsDetails;
