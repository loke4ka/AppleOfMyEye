import { useMemo } from "react";
import styles from "./PerspectiveConnectorContainer.module.css";

const PerspectiveConnectorContainer = ({ propPadding, propPadding1 }) => {
  const callToActionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <section className={styles.callToAction} style={callToActionStyle}>
      <h1 className={styles.letNextcentDo}>
        "Apple of My Eye: Sharing Perspectives, Connecting Hearts."
      </h1>
      <button className={styles.button} style={buttonStyle}>
        <div className={styles.label}>Download</div>
        <img className={styles.arrowsDirectionsright} alt="" src="/16arrows--directionsright@2x.png"/>
      </button>
    </section>
  );
};

export default PerspectiveConnectorContainer;
