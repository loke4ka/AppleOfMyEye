import styles from "./InnerFrame.module.css";

const InnerFrame = () => {
  return (
    <div className={styles.innerFrameDiv}>
    <header className={styles.innerFrame}>
      <h3 className={styles.appleOfMy}>APPLE OF MY EYE</h3>
      <div className={styles.logo} />
      <div className={styles.labelParent}>
        <div className={styles.label} style={{cursor: "pointer"}} onClick={() => window.location.href = "/"}>Home</div>
        <div className={styles.label1} style={{cursor: "pointer"}} onClick={() => window.location.href = "/about"}>About</div>
        <div className={styles.label2} style={{cursor: "pointer"}} onClick={() => window.location.href = "/faq"}>FAQ</div>
        <div className={styles.label2} style={{cursor: "pointer"}} onClick={() => window.location.href = "/Community"}>Community</div>
        <div className={styles.label3}>Download</div>
      </div>
    </header>
    </div>
  );
};

export default InnerFrame;
