import { useMemo } from "react";
import styles from "./Component.module.css";

const Component = ({
  branchOfNGOKOSAkmolaOblas,
  kokshetauCityKanaibiStr42,
  eMailAkmolafilialmailru,
  prop,
  propHeight,
  propPadding,
  propHeight1,
}) => {
  const divStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const kokshetauCityKanaibiContainerStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseWrapper}>
            <div className={styles.frameChild} />
          </div>
          <h2 className={styles.branchOfNgo}>{branchOfNGOKOSAkmolaOblas}</h2>
        </div>
        <div
          className={styles.kokshetauCityKanaibiStr42Wrapper}
          style={frameDivStyle}
        >
          <div
            className={styles.kokshetauCityKanaibiContainer}
            style={kokshetauCityKanaibiContainerStyle}
          >
            <p className={styles.kokshetauCityKanaibi}>
              {kokshetauCityKanaibiStr42}
            </p>
            <p className={styles.eMailAkmolafilialmailru}>
              <b>{eMailAkmolafilialmailru}</b>
            </p>
            <p className={styles.p}>
              <b>{prop}</b>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.child} />
    </div>
  );
};

export default Component;
