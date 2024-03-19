import styles from "./FrameWrapper.module.css";

const FrameWrapper = () => {
  return (
    <div className={styles.frameWrapperDiv}>
    <header className={styles.frameWrapper}>
      <b className={styles.appleOfMy}>APPLE OF MY EYE</b>
      <div className={styles.logo} />
      <div className={styles.appleLabel}>
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

export default FrameWrapper;
